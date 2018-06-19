import web3 from './web3';
import Declaratie from './build/Declaratie.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Declaratie.interface),
    address
  );
};
