function division(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    return ({ quotient: quotient, remainder: remainder });
}
var division1 = division(7, 2);
console.log(division1);
