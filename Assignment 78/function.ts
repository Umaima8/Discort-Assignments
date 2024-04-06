//A function declaration, also known as a function statement,
// is created using the function keyword followed by a function name.

function squaring (num: number): number {
    
    return num*num

}

console.log(squaring(3))

//A function expression is similar to a function declaration but without a function name. 
//Instead, it is assigned to a variable.

let squaringNums = function (num1:number): number {

    return num1 * num1

}

console.log(squaringNums(4))