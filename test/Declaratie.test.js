const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/DeclarationFactory.json');
const compiledDeclaration = require('../ethereum/build/Declaration.json');

//accounts[0] = Care Administration Office address
//accounts[2] = Insurance address
//accounts[4] = Client address
let accounts;
let factory;
let declarationAddress;
let declaration;

beforeEach( async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '3000000'});

  await factory.methods.createDeclaration(accounts[4], accounts[2], "D3002;BB025;A3002", "1680;1500;0100", "16-06-2018").send({
      from: accounts[0],
      gas: '3000000'
    });

  const address = await factory.methods.getDeclarations().call();
  declarationAddress = address[0];

  declaration = new web3.eth.Contract(
    JSON.parse(compiledDeclaration.interface),
    declarationAddress
  );
});

describe('Declaration Contract', () => {
  it('A factory- and declaration contract have succesfully been deployed', () => {
    assert.ok(factory.options.address);
    assert.ok(declaration.options.address);
  });

  it('The Care Administration Office can read the declaration', async () => {
    const summary = await declaration.methods.getDeclaration().call();
    assert.equal(accounts[2], summary[1]);
  });

  it('The Care Administration Office can edit the declaration', async () => {
    await declaration.methods.editDeclaration(accounts[4], accounts[2], "TEST1;TEST2;TEST3", "1234;5678;9012", "01-01-2000").send({
      from: accounts[0],
      gas: '3000000'
    });
    const summary = await declaration.methods.getDeclaration().call();
    assert.equal("TEST1;TEST2;TEST3", summary[3]);
  });

  it('Only the Care Administration Office can edit the declaration, and nobody else', async () => {
    try {
      await declaration.methods.editDeclaration(accounts[4], accounts[2], "TEST1;TEST2;TEST3", "1234;5678;9012", "01-01-2000").send({
        from: accounts[2],
        gas: '3000000'
      });
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('The Care Administration Office can validate the declaration', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    const validated = await declaration.methods.isValidated().call();
    assert.equal(true, validated);
  });

  it('The Care Administration Office can no longer edit the declaration after it has been validated', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    try{
      await declaration.methods.editDeclaration(accounts[4], accounts[2], "TEST1;TEST2;TEST3", "1234;5678;9012", "01-01-2000").send({
        from: accounts[0],
        gas: '3000000'
      });
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('The Client can read the declaration, if the declaration is validated', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    const summary = await declaration.methods.getDeclaration().call({from:accounts[2]});
    assert.equal(accounts[2], summary[1]);
  });

  it('The Client can\'t read the declaration, if the declaration isn\'t validated', async () => {
    try {
      const summary = await declaration.methods.getDeclaration().call({from:accounts[2]});
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('The Client can accept the declaration, if the declaration is validated', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    await declaration.methods.accept().send({
      from: accounts[2],
      gas: '3000000'
    });
    const approved = await declaration.methods.isAccepted().call();
    assert.equal(true, approved);
  });

  it('The Client can\'t accept the declaration, if the declaration isn\'t validated', async () => {
    try {
      await declaration.methods.accept().send({
        from: accounts[2],
        gas: '3000000'
      });
      assert(false);
    }
    catch (err){
      assert(err);
    }
  });

  it('Only the Client can accept the declaration, and nobody else', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    try {
      await declaration.methods.accept.send({
        from: accounts[0],
        gas: '3000000'
      });
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('The Insurance can read the declaration, if the declaration is validated', async () => {
    await declaration.methods.validate().send({
      from: accounts[0],
      gas: '3000000'
    });
    const summary = await declaration.methods.getDeclaration().call({from:accounts[4]});
    assert.equal(accounts[2], summary[1]);
  });

  it('The Insurance can\'t read the declaration, if the declaration isn\'t validated', async () => {
    try {
      const summary = await declaration.methods.getDeclaration().call({from:accounts[4]});
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

});
