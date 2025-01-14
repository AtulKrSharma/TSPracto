let currentMarks = 55;
let grade = 10;

if (grade == 10 && currentMarks >= 80) console.log(`you're selected`);
else if (grade == 10 && currentMarks > 65 && currentMarks < 80)
  console.log(`you're in waiting list`);
else if (grade == 10 && currentMarks >= 50 && currentMarks < 65)
  console.log(`you're rejected`);
