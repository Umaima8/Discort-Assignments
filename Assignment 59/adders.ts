function CustomAdder (Adder: number): (num: number) => number {

    return  (num: number) => num + Adder
    
}

let num1 = CustomAdder(10)

console.log(num1(4))

console.log(num1(8))