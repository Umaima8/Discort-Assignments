let val: number = 8

//now i am gonna change the value of val

val = 6

//in the upper initialization,it isn't showing any errors

console.log(val)

const num: number = 10

try {

//going to change the value of num

num = 7

}

catch(error) {
    console.log("Can't re-assingn a constant")
}

//it is showing an error that says num cannot be assigned as it is a constant
