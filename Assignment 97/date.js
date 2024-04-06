function getDate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth()).padStart(2, '0');
    var year = String(now.getFullYear());
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getDate());
