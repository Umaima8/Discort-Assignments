//When you declare a variable using let inside a loop, it is scoped to that specific iteration of the loop.
// Once the loop iteration ends, the variable is no longer accessible.



function printingNums () {

    for( let i = 1; i <= 5; i++)
    console.log(i)
}

printingNums()