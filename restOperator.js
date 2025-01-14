//rest operator= collect the rest
//used in destructuring assignments or function parameters to collect the remaining elements into a single variable

const fruits = ['a', 'c', 'e', 'g'];

const [one, two, ...rest] = fruits;

console.log(one);
console.log(two);
console.log(rest);

//spread = spread the collected
// expand elements of an iterable (like arrays, strings, or objects) or to spread the properties of an object

const tempArr = [fruits, ...rest];
console.log(`tempArr is ${tempArr}`);
