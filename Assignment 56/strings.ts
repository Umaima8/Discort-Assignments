let mixItems = ["harry", 9, true, "boiling water",0 , "ice"]

let words: string[] = []

for (let word of mixItems) {

    if (typeof(word) === "string") {

         words.push(word)
    }
}
console.log(words)