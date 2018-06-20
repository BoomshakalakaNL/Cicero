import web3 from './web3';
import DeclarationFactory from './build/DeclarationFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(DeclarationFactory.interface),
  '0xBDCB9aD2B691e32719F314a460B84bD2240ad8E2'
);

export default instance;
