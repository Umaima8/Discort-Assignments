function iteration(properties) {
    for (var property in properties) {
        console.log("".concat(property, ": ").concat(properties[property]));
    }
}
iteration({
    make: "RedMe",
    model: "Note9Pro",
    price: "35,000",
    camera: "64 mega-pixel"
});
