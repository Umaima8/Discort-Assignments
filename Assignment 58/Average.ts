function Average (scores: number[]): number {

    let grade = scores.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;

    }, 0)

       let sum = grade/ scores.length

       return sum

}




let marks1 = Average([45,89,78,90])

console.log(marks1)

let marks2 = Average([67,98,92,90])

console.log(marks2)