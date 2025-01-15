const dummyObj = {
  school: 'svms',
  city: 'city1',
  isMonitor: true,
  isLovesWater: true,
  checkSwimmer: (monitor, lovesWater) => {
    if (monitor == true && lovesWater == true) return `yes,it's a swimmer`;
    else return `nay, it's not a swimmer`;
  },
  logDetails() {
    console.log(`${this.school} and ${this.isLovesWater}`);
  },
};

dummyObj.logDetails();
console.log(dummyObj.checkSwimmer(dummyObj.isMonitor, dummyObj.isLovesWater));
