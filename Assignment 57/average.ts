let marks: number[] = [45,78,92,37,60]

let grade = marks.reduce((accumulator: number,currentValue: number) => {

    return accumulator + currentValue


},0)

let average = grade / marks.length

console.log(average)