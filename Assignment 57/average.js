var marks = [45, 78, 92, 37, 60];
var grade = marks.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
var average = grade / marks.length;
console.log(average);
