//The reduce() function accumulates values from an array into a single result.
//It applies a reducer function to each element, combining them into a final value.
function reduction(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
var numbers = [20, 78, 12, 98];
console.log(reduction(numbers));
