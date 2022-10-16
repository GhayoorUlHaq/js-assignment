let car = 'subaru';
const names = ['Ghayoor', 'Bilal', 'Aqeel'];
const n1 = 10;
const n2 = 11;

console.log("Is car == 'subaru'? I predict True.")
console.log(car === 'subaru')

console.log("Is car[0] === 's'? I predict True.")
console.log(car[0] === 's')

console.log("Is car[1] === 'u'? I predict True.")
console.log(car[1] === 'u')

console.log("Is car[2] === 'b'? I predict True.")
console.log(car[2] === 'b')

console.log("Is car[3] === 'a'? I predict false.")
console.log(car[3] === 'a')

console.log("Is car == 'BMW'? I predict false.")
console.log(car === 'BMW')

console.log("Is car == 'Skuda'? I predict false.")
console.log(car === 'Skuda')

console.log("Is car[0] === 'B'? I predict false.")
console.log(car[0] === 'B')

console.log("Is car[5] === 'L'? I predict false.")
console.log(car[5] === 'L')

console.log("Is car == 'Mers'? I predict false.")
console.log(car === 'Mers')

console.log("Is n1 == n2? I predict False.")
console.log(n1 === n2);

console.log("Is n1 !== n2? I predict True.")
console.log(n1 !== n2);

console.log("Is n1 > n2? I predict False.")
console.log(n1 > n2);

console.log("Is n1 < n2? I predict true.")
console.log(n1 < n2);

console.log("Is n1 >= n2? I predict False.")
console.log(n1 >= n2);

console.log("Is n1 <= n2? I predict true.")
console.log(n1 <= n2);

console.log("Is n1 < n2 or n1 == n2? I predict true.")
console.log(n1 < n2 || n1 === n2);

console.log("Is n1 < n2 and n1 == n2? I predict false.")
console.log(n1 < n2 && n1 === n2);

console.log("Is Amjad in names? I predict false.")
console.log(names.includes('Amjad'))

console.log("Is Ghayoor in names? I predict false.")
console.log(names.includes('Ghayoor'))
