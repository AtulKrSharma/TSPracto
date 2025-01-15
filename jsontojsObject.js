import temp from './temp.json' assert { type: 'json' };

const dummyObj = {
  school: 'svms',
  city: 'city1',
  isMonitor: true,
  isLovesWater: true,
};

//console.log(JSON.stringify(dummyObj));

console.log(JSON.parse(temp));
