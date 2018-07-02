export function getDeclarationFromSummary(CareCodes, CareAmounts, CarePrices){
  var careCodes = CareCodes.split(";");
  var careAmounts = CareAmounts.split(";");
  var carePrices = CarePrices.split(";");

  var declarations = [];

  for( var i = 0; i < careCodes.length; i++ ){
    declarations.push({
      code : careCodes[i],
      amount : careAmounts[i],
      price : toNumberString(parseFloat(carePrices[i])/100)
    });
  }

  return declarations;
}

export function getGrandTotal(CareAmounts, CarePrices){
  var grandTotal = 0;
  var careAmounts = CareAmounts.split(";");
  var carePrices = CarePrices.split(";");
  for ( var i = 0; i < carePrices.length; i++ ){
    grandTotal += parseInt(careAmounts[i]) * (parseFloat(carePrices[i])/100);
  }
  return grandTotal;
}

export function toNumberString(num) {
  if (Number.isInteger(num)) {
    return num + ".00"
  } else {
    return num.toString();
  }
}

import clientInfo from '../clientInformation.json';
import productInfo from '../productInformation.json';
import otherInfo from '../otherInformation.json';

export function  getClientName (address){  
  let name;
  
  clientInfo.map(function(clientName){
    if (address.toString() == clientName.id){  
      name = clientName.name;
      return;
    }
  })
  return name;
}

export function getProductName (code){  
  let name;
  
  productInfo.map(function(product){
    if (code == product.id){  
      name = product.name;
      return;
    }
  })
  return name;
}

export function getOtherInformation (address){  
  let name;
  
  otherInfo.map(function(info){
    if (address == info.id){  
      name = info.name;
      return;
    }
  })
  return name;
}