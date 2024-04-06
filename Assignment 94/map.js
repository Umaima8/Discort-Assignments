//The map() function allows you to transform each element of an array into a new element
//based on a function that you define.
var names = ["Umaima", "Tayyaba", "Aqsa", "Iqra"];
var lengthOfArray = names.map(function (name) {
    return name.length;
});
console.log(lengthOfArray);
