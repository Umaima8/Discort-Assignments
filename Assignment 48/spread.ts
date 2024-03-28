//The spread operator in TypeScript is a powerful syntax denoted by three dots (...). It allows you to spread the elements of an array or objects into another array or objects. Let’s explore how it works:


const laptop1: number[] = [24000, 36000, 48000]

const laptop2: number[] = [40000, 78000, 20000]

const prices = [...laptop1, ...laptop2]

prices.sort()

console.log(prices)