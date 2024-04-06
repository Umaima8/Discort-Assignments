function iteration (properties: object) {

    for (let property in properties) {
       
       console.log(`${property}: ${properties[property]}`)
    
    }
}

iteration
(
    {
        make: "RedMe",
        model: "Note9Pro",
        price: "35,000",
        camera: "64 mega-pixel"

    }
)

