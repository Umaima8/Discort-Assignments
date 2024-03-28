//In TypeScript, rest parameters provide a convenient way to handle an indefinite number of function arguments.
var hobbies = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("\"I enjoy the hobby of ".concat(hobby, "\""));
    });
};
var ManyHobbies = hobbies("reading", "cycling", "swimming");
console.log(ManyHobbies);
