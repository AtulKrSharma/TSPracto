const fruits = ['a', 'c', 'e', 'g'];

for (let iterator of fruits) {
  console.log(iterator);
}

console.log(`^^^^^^`);
console.log(`^^^^^^`);

for (let iterator = 0; iterator <= fruits.length - 1; iterator++) {
  console.log(fruits[iterator]);
}

console.log(`^^^^^^`);

fruits.forEach((elem) => console.log(elem));

/**
 * foreach
 * every
 *  map
 * filter
 * reduce
 * sort()
 * sort(a,b)
 */
