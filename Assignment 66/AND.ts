function checking (value1: boolean,value2: boolean): boolean {
         
    if (value1 === true && value2 === true) {
        return true
    }
    else {
        return false
    }
       
}

let checking1 = checking(true,true)

console.log(checking1)

let checking2 = checking(true,false)

console.log(checking2)