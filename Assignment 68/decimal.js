function sumOfDecimals(num1, num2) {
    var sum = num1 * num2;
    return Number(sum.toFixed(2));
}
var sum1 = sumOfDecimals(0.1, 1.3);
console.log(sum1);
