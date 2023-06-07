const cap = 15.678;
const sneakers = 123.965;
const blouse = 90.2345;

let products = [cap, sneakers, blouse];
let maxPrice = Math.max(...products);
let minPrice = Math.min(...products);
document.writeln('Max price - ' + maxPrice);
document.writeln('Min price - ' + minPrice);

let sumPrice = (cap + sneakers + blouse);
document.writeln('Sum of products prices - ' + sumPrice);

let sumWholePrice = Math.trunc(cap) + Math.trunc(sneakers) + Math.trunc(blouse);
document.writeln('Sum of whole prices - ' + sumWholePrice);

let roundPrice = Math.round(sumPrice / 100) * 100;
document.writeln('Round price - '+ roundPrice);

let floorPrise= Math.floor(sumPrice);
document.writeln('Floor price - ' + floorPrise);

let isEven = floorPrise % 2 == 0;
document.writeln('Boolean - ' + isEven);

let change = 500 - sumPrice;
document.writeln('Change - ' + change);

let averagePrice = (cap + sneakers + blouse) / 3;
let roundAverage = Math.round(averagePrice * 100) / 100;
document.writeln('Average value - ' + roundAverage);

let randomSale = (Math.random() * 50).toFixed(0);
document.writeln('Random sale - ' + randomSale);

let clientSale = (sumPrice - sumPrice * randomSale / 50).toFixed(2);
document.writeln('Client sale - ' + clientSale);

let profit = (sumPrice / 2 - (sumPrice * randomSale / 50)).toFixed(2);
document.writeln('Profit - ' + profit);

let = allStrings = `
Max price - ${maxPrice}
Min price - ${minPrice}
Sum of products prices - ${sumPrice}
Sum of whole prices - ${sumWholePrice}
Round price - ${roundPrice}
Floor price - ${floorPrise}
Boolean - ${isEven}
Change - ${change}
Average value - ${roundAverage}
Random sale - ${randomSale}
Client sale - ${clientSale}
Profit - ${profit}
`
console.log(allStrings);