import web3 from './web3';
import DeclarationFactory from './build/DeclarationFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(DeclarationFactory.interface),
  '0xb94Fe8e7F62118ccCDb6a7dDd593A07C88458e69'
);

export default instance;
