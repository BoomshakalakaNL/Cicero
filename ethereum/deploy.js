const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'bone push blush film matter retreat divert night cargo sample family muffin',
    'https://rinkeby.infura.io/iAB9K2btX5sUFqcvhTo3'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ gas: '1000000', gasPrice: web3.utils.toWei('2', 'gwei'), from: accounts[0] });
    console.log(interface);
    console.log('Contract deployed to', result.options.address);

};

deploy();
