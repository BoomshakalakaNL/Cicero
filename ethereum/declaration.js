import web3 from './web3';
import Declaration from './build/Declaration.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Declaration.interface),
    address
  );
};
