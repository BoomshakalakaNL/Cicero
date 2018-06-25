export function getDeclarationFromSummary(CareCodes, CareAmounts, CarePrices){
  var careCodes = CareCodes.split(";");
  var careAmounts = CareAmounts.split(";");
  var carePrices = CarePrices.split(";");

  var declarations = [{
    code: '',
    amount: 0,
    price: 0
  }];

  for( var i = 0; i < careCodes.length; i++ ){
    declarations[i] = [{
      code : careCodes[i],
      amount : parseFloat(careAmounts[i]),
      price : parseFloat(carePrices[i])/100
    }];
  }

  return declarations;
}
