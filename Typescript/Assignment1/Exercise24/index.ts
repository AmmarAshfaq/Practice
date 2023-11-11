let carName = "Honda";

console.log(carName === "Honda");
console.log(carName !== "Honda");

console.log(carName.toLowerCase() === "Honda");

let value1: number = 5;

// value1 is greater then equal to 5 it should be true
console.log(value1 >= 5);

// value1 is less then 6 it should be true
console.log(value1 < 6);

// value1 is multiply by one which is equal to 5 it should be true
console.log(value1 * 1 === 5);

// reminder is 0 so it is also true
console.log(value1 % 5 === 0);

// reminder is 1 so it is also true
console.log(value1 % 4 !== 0);

// value1 is greater then equal to 5 it should be false
console.log(value1 > 5);

// value1 is less then 4 it should be false
console.log(value1 < 4);

// value1 is multiply by one which is not equal to 5 it should be false
console.log(value1 * 1 !== 5);

// reminder is 0 so it is also false
console.log(value1 % 5 !== 0);

// reminder is 0 so it is also false
console.log(value1 % 4 === 0);

console.log(value1 >= 5 && value1 <= 5);
console.log(value1 >= 5 || value1 !== 6);

let arrValue: number[] = [3, 22];

console.log(arrValue.includes(2));
console.log(arrValue.includes(3));
