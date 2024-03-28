//In TypeScript, rest parameters provide a convenient way to handle an indefinite number of function arguments.


let hobbies =  (...hobbies: string[]) => {

    hobbies.forEach(hobby => {

        console.log(`"I enjoy the hobby of ${hobby}"`)
        
    });
        
       
}

    let ManyHobbies = hobbies ("reading", "cycling", "swimming")

    
    console.log(ManyHobbies)
