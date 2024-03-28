var laptop = {
    make: "lenovo",
    model: "XS2020",
    year: 2018,
    describe: function () {
        console.log("This is a new model launched recently by LENOVO");
    },
    colour: function (colours) {
        console.log("You can choose any colour ");
        return colours;
    }
};
console.log(laptop);
var colour = laptop.colour("BLACK");
console.log("\"You have chosen ".concat(colour, "\""));
laptop.describe();
