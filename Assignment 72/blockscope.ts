//Variables declared with let are not accessible outside of the block where they are defined.

function exampleFunction () {


    if (true) {
    let num: number = 34
    num = 90
    //it can be re-assigned within a block-scope as it is declared with 'let'
    }
    
    num = 90

//its showing  an error.. 

}

function exampleFunction2 () {

    if (false) {
        const num2 = 32
        num2 = 5
//cannot even re-assigned inside a block scope as its declared with 'const'
    }

    num2 = 67
//definitely will not work as its re-assigned outside block scope
}

