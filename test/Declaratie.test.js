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

  await factory.methods.createDeclaratie(accounts[4], accounts[5], ["test1", "test2", "test3"],[ 1, 2, 3], "16-06-2018").send({
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

});
