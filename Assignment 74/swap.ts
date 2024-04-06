//assigning a value to the variable 'a'
let a: number = 10


//storing a value in a different variable for temporary time
let swappingValue: number = a

//assigning a value to the variable 'b'
let b: number = 5


//swapping the value of 'a'
a = b

console.log("the value of a is swapped to b: ",a)

//swapping the value of 'b'
b = swappingValue

console.log("the value of b is swapped to a: ", b)