interface info {

    name: string,
    age: number,
    classes: string,
    timings: string

}


function student (form: info):info {

    
    return form
}

let student1 = student({
    name: "Umaima",
    age: 18,
    classes: "AI Generative",
    timings: "9 AM"

})

let student2 = student({
    name: "Tayyaba",
    age: 23,
    classes: "AI Generative",
    timings: "9 AM"
})

console.log(student1)
console.log(student2)