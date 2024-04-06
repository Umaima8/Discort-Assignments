//A function declaration, also known as a function statement,
// is created using the function keyword followed by a function name.
function squaring(num) {
    return num * num;
}
console.log(squaring(3));
//A function expression is similar to a function declaration but without a function name. 
//Instead, it is assigned to a variable.
var squaringNums = function (num1) {
    return num1 * num1;
};
console.log(squaringNums(4));
