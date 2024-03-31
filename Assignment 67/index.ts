function mixedTypes (num: number, val: string): number {

    return num + Number(val)

}

let sum = mixedTypes(6,"6")

console.log(sum)