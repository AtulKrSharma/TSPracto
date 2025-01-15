const greeting = ({ name, addresss, year }) =>
  `my name is ${name} and stay in ${addresss} & ${year}`;

console.log(
  greeting({
    name: 'atul',
    addresss: 'Canada',
    thisYear: 2025
  })
);
