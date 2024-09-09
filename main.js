//Q1
console.log('Q1');

let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 27, 99];

console.log(numbers.sort((num1, num2) => num1 - num2));

let numbers1 = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 27, 99];
console.log(numbers1.map(num => num * num));

console.log(numbers.find(num => num > 25));

console.log(numbers.every(num => num > 5));

console.log(numbers.includes(3));

console.log(numbers.filter(num => num % 2 === 0));

let numbers2 = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 27, 99];
numbers2.splice((numbers2.length / 2), 2)
console.log(numbers2);

console.log(numbers.reduce((num1, num2) => num1 * num2));

let numbers3 = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 27, 99];
console.log(numbers3.findIndex(num => num > 5));

let numbers4 = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 27, 99];
numbers4.pop();
console.log(numbers4);

numbers4.push(100);
console.log(numbers4);


//Q2
console.log('Q2');

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

console.log(names.filter(name => name.toLowerCase().includes("a")))

console.log(names.join("-"));


//Q3
console.log('Q3');

let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];

console.log(fruits.some(fruit => fruit.charAt(0) === "b"));

console.log(fruits.slice(1, 4));

let fruits2 = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];
fruits2.unshift('yellow')
console.log(fruits2);


//Q4
console.log('Q4');

let words = ['hello', 'world', 'javascript', 'array', 'function'];

console.log(words.map(word => word.length));

console.log(words.find(word => word === "javascript") || "'javascript' not in the array!!")