const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  raj: function () {
    return this.firstName + ' ' + this.lastName;
  },

  adder() {
    return this.firstName + ' is now adder';
  },
};

console.log(person.raj());
console.log(person.adder());
