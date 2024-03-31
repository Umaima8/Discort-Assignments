function CustomAdder(Adder) {
    return function (num) { return num + Adder; };
}
var num1 = CustomAdder(10);
console.log(num1(4));
console.log(num1(8));
