//The spread operator in TypeScript is a powerful syntax denoted by three dots (...). It allows you to spread the elements of an array or objects into another array or objects. Let’s explore how it works:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop1 = [24000, 36000, 48000];
var laptop2 = [40000, 78000, 20000];
var prices = __spreadArray(__spreadArray([], laptop1, true), laptop2, true);
prices.sort();
console.log(prices);
