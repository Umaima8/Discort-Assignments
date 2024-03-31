function checking(value1, value2) {
    if (value1 === true && value2 === true) {
        return true;
    }
    else {
        return false;
    }
}
var checking1 = checking(true, true);
console.log(checking1);
var checking2 = checking(true, false);
console.log(checking2);
