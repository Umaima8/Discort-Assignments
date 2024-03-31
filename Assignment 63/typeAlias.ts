type shape = {
    kind: "circle" | "rectangle",
    radius?,
    centre?
    quadrilateral?,
    diagonal?

}


let circle: shape = {
    kind: "circle",
    radius: 12,
    centre: 0.9
}

let rectangle: shape = {

    kind: "rectangle",
    quadrilateral: 14,
    diagonal:0.08 
}

console.log(circle)

console.log(rectangle)




