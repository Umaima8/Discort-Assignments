function sumOfDecimals (num1: number, num2: number): number {

    let sum = num1 * num2

    return Number(sum.toFixed(2))
}

let sum1 = sumOfDecimals(0.1,1.3)

console.log(sum1)