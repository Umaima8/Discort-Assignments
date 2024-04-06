function replace (arr: string[]) {

    let replacement = arr.indexOf("Banana")

    if (replacement !== -1)
    {
    
        arr[replacement] = "Mango"
    
    }

}



let fruits: string[] = ["Apple","Banana","Cherry","Orange"]

replace(fruits)

console.log(fruits)