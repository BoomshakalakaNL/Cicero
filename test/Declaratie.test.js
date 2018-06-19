const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);



const contracts = require ('../compile');


let accounts; // accounts[0] = zorgkantoor, accounts[4] = client, accounts[5] = verzekeraar
let factory;
let declaratieAddress;
let declaratie;

beforeEach( async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(contracts[':DeclaratieFactory'].interface))
    .deploy({ data: "0x" + contracts[':DeclaratieFactory'].bytecode })
    .send({ from: accounts[0], gas: '5000000'});

  await factory.methods.createDeclaratie(accounts[4], accounts[5], "AC130;BF400;AF900", [ 1, 2, 3], "16-06-2018").send({
      from: accounts[0],
      gas: '5000000'
    });

  const address = await factory.methods.getDeployedDeclaraties().call();
  declaratieAddress = address[0];

  declaratie = new web3.eth.Contract(
    JSON.parse(contracts[':Declaratie'].interface),
    declaratieAddress
  );
});

describe('Declaratie Contract', () => {
  it('Een factory contract en een declaratie contract worden gedeployed', () => {
    assert.ok(factory.options.address);
    assert.ok(declaratie.options.address);
  });

  it('De ingevoerde addressen zijn stakeholders', async () => {
    const stakeholders = await declaratie.methods.stakeholders().call();
    assert.equal(accounts[0], stakeholders.zorgkantoor);
    assert.equal(accounts[4], stakeholders.client);
    assert.equal(accounts[5], stakeholders.verzekeraar);
  });

  it('Client kan lezer toevoegen', async () => {
    await declaratie.methods.addReader(accounts[2]).send({
      from: accounts[4],
      gas: '5000000'
    });
    const boolLezer = await declaratie.methods.magLezen(accounts[2]);
    assert(boolLezer);
  });

  it('Client kan een accordeerder toevoegen', async () => {
    await declaratie.methods.addValidator(accounts[2]).send({
      from: accounts[4],
      gas: '5000000'
    });
    const boolLezer = await declaratie.methods.magAccorderen(accounts[2]);
    const boolAccordeerder = await declaratie.methods.magAccorderen(accounts[2]);
    assert(boolLezer);
    assert(boolAccordeerder);
  });

  it('Alleen een client mag lezer toevoegen', async () => {
    try {
      await declaratie.methods.addValidator(accounts[1]).send({
        from: accounts[0],
        gas: '5000000'
      });
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('Het zorgkantoor kan intern valideren', async () => {
    await declaratie.methods.validate().send({
      from: accounts[0],
      gas: '5000000'
    });
    const validated = await declaratie.methods.getIsInternGevalideerd().call();
    assert.ok(validated);
  });

  it('Niemand anders dan het zorgkantoor kan intern valideren', async () => {
    try {
      await declaratie.methods.validate().send({
        from: accounts[1],
        gas: '5000000'
      });
      assert(false);
    }
    catch (err) {
      assert(err);
    }
  });

  it('De client kan een declaratie accorderen', async () => {
    await declaratie.methods.validate().send({
      from: accounts[0],
      gas: '5000000'
    });
    await declaratie.methods.accorderen().send({
      from: accounts[4],
      gas: '5000000'
    });
    const akkoord = await declaratie.methods.getIsAkkoord().call();
    assert.ok(akkoord);
  });

  it('Een mantelzorger die door de client is toegevoegd, kan accorderen', async () => {
    await declaratie.methods.validate().send({
      from: accounts[0],
      gas: '5000000'
    });
    await declaratie.methods.addValidator(accounts[2]).send({
      from: accounts[4],
      gas: '5000000'
    });
    await declaratie.methods.accorderen().send({
      from: accounts[2],
      gas: '5000000'
    });
    const akkoord = await declaratie.methods.getIsAkkoord().call();
    assert.ok(akkoord);
  });

  it('Het zorgkantoor kan de declaratie aanpassen zolang deze niet intern is gevalideerd', async () => {
    await declaratie.methods.editDeclaratie(accounts[2], accounts[5], "AC130;BF400;AF900", [ 1, 2, 3], "16-06-2018").send({
      from: accounts[0],
      gas: '5000000'
    });
    const stakeholders = await declaratie.methods.stakeholders().call();
    assert.equal(accounts[2], stakeholders.client);
  });

  it('Kan alle gegevens ophalen', async () => {
    const summary = await declaratie.methods.getSummary().call();
    assert(summary);
  });


});
