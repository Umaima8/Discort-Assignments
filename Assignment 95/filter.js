function test(numbers) {
    return numbers.filter(function (num) { return num > 10; });
}
var numbersGreaterThanTen = [2, 80, 6, 17, 20, 9];
console.log(test(numbersGreaterThanTen));
