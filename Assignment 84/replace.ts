function replacing (str: string): string {

    return str.replace(/Javascript/g,"Typescript")
    //using the regular expression with 'g' for global replacement
}

console.log(replacing("I love coding in Javascript because Javascript is the best programming language"))