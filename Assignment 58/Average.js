function Average(scores) {
    var grade = scores.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    var sum = grade / scores.length;
    return sum;
}
var marks1 = Average([45, 89, 78, 90]);
console.log(marks1);
var marks2 = Average([67, 98, 92, 90]);
console.log(marks2);
