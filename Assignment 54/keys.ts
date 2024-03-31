function keyObject (key: string, value: string) {

    let Dynamickey = {}
    Dynamickey[key] = value
    return Dynamickey

}

let userChoice = keyObject("name", "Umaima")

console.log(userChoice)