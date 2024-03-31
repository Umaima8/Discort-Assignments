var mixItems = ["harry", 9, true, "boiling water", 0, "ice"];
var words = [];
for (var _i = 0, mixItems_1 = mixItems; _i < mixItems_1.length; _i++) {
    var word = mixItems_1[_i];
    if (typeof (word) === "string") {
        words.push(word);
    }
}
console.log(words);
