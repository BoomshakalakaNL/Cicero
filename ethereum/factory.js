import web3 from './web3';
import DeclaratieFactory from './build/DeclaratieFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(DeclaratieFactory.interface),
  '0x12aEdE551aecAf12D418481684B92A708435F6C0'
);

export default instance;
