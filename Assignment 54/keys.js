function keyObject(key, value) {
    var Dynamickey = {};
    Dynamickey[key] = value;
    return Dynamickey;
}
var userChoice = keyObject("name", "Umaima");
console.log(userChoice);
