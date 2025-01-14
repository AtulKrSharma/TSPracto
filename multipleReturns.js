//how to Return multiple values in JavaScript?

const returnObj = (name, address) => {
  const newName = name.toUpperCase();
  const newAddress = address.toUpperCase();
  return { newName, newAddress };
};

console.log(returnObj('Atul', 'Mississauga'));
console.log('^^^^^');

const { newName: Naam, newAddress: Pata } = returnObj('Atuls', 'Mississaugas');
console.log(Naam);
console.log(Pata);
