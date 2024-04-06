//The map() function allows you to transform each element of an array into a new element
 //based on a function that you define.

 let names: string[] = ["Umaima","Tayyaba","Aqsa","Iqra"]

 let lengthOfArray: number[] = names.map((name) => 
 
    name.length
 
 
)

console.log(lengthOfArray)