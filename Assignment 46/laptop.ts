let laptop = {
    make: "lenovo",
    model: "XS2020",
    year: 2018,
    describe() {
        console.log("This is a new model launched recently by LENOVO")
    },

    colour(colours: string) {
         
        
        return colours
    }

}

console.log(laptop)

let colour = laptop.colour("BLACK")

console.log(`"You have chosen ${colour}"`)

laptop.describe()


