function test (numbers: number[]) {

    return numbers.filter((num) =>  num > 10 )

}

let numbersGreaterThanTen: number[] = [2,80,6,17,20,9]

console.log(test(numbersGreaterThanTen))

