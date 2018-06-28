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

export function getGrandTotal(Declarations){
  var grandTotal = 0;
  var declarations = Declarations;
  this.declarations.forEach( function (element) {
    grandTotal += element.price;
  });

  return grandTotal;
}

export function toNumberString(num) {
  if (Number.isInteger(num)) {
    return num + ".00"
  } else {
    return num.toString();
  }
}


export function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
