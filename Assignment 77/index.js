function greeting(name) {
    if (name === void 0) { name = "user"; }
    return "\"Hello ".concat(name, " How are you?\"");
}
console.log(greeting("Umaima"));
console.log(greeting());
