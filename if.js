let fname;
let lname = 'raja';

function greeting(frname, lrname) {
  if (typeof frname === 'undefined' || typeof lrname === 'undefined') {
    return 0;
  } else return 1;
}

console.log(greeting(fname, lname));
