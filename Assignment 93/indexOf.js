function replace(arr) {
    var replacement = arr.indexOf("Banana");
    if (replacement !== -1) {
        arr[replacement] = "Mango";
    }
}
var fruits = ["Apple", "Banana", "Cherry", "Orange"];
replace(fruits);
console.log(fruits);
