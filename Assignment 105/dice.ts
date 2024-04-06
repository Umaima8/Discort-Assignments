function dice (): number {

    let num: number = Math.floor(Math.random() * 6 + 1)

    return num
}

console.log(dice())