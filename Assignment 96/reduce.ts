//The reduce() function accumulates values from an array into a single result.
//It applies a reducer function to each element, combining them into a final value.

function reduction (numbers: number[]): number {

    return numbers.reduce( (acc,num) => acc + num, 0)
}

let numbers: number[] = [20,78,12,98]

console.log(reduction(numbers))