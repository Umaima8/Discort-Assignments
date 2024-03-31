function division (num1: number, num2: number): object {

    let quotient = Math.floor(num1 / num2)

    let remainder = num1 % num2

    return ({ quotient, remainder })

}

let division1 = division(7,2)

console.log(division1)