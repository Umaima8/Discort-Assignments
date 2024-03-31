var userProfile = function () {
    var name = "Umaima";
    var age = 10;
    return {
        display: function () {
            console.log("Your name is ".concat(name, " and your age is ").concat(age));
        }
    };
}();
userProfile.display();
