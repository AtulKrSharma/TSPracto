const greeting = ({ name, addresss }) =>
  `my name is ${name} and stay in ${addresss}`;

console.log(
  greeting({
    name: 'atul',
    addresss: 'Canada',
  })
);
