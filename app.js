// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3))
// module.exports = { sum };

// const fromEuroToDollar = function(valueInEuro) {
//     // Convert the given valueInEuro to dollars
//     let valueInDollar = valueInEuro * 1.07;
//     // return the dollar value
//     return valueInDollar;
// }
// module.exports = { fromEuroToDollar };


let oneEuroEquals = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87};

function fromDollarToYen(dollars) {
    return (dollars / oneEuroEquals["USD"]) * oneEuroEquals["JPY"];
}

// (1 / 1.07) * 156.5 ≈ 146.26

function fromEuroToDollar(euros) {
    return (euros * oneEuroEquals["USD"]);
}

// (3.5 * 1.07) = 3.745

function fromYenToPound(yen) {
    return (yen / oneEuroEquals["JPY"]) * oneEuroEquals["GBP"];
}

// (1 / 156.5) * 0.87 ≈ .00555

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };