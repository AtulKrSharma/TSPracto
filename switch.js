const currentDay = 'mon';
console.log(currentDay.toUpperCase());
console.log(typeof currentDay);

switch (currentDay.toUpperCase()) {
  case 'MON':
  case 'TUES':
  case 'WED':
    console.log('working days');
    break;
  case 'FRI':
  case 'SAT':
  case 'SUN':
    console.log('weekends');
    break;
  default:
    console.log('default');
    break;
}
