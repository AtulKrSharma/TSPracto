class DummyClass {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  dummyName(numbers) {
    let numbersIncrement = numbers + 1;
    return numbersIncrement;
  }
}

let dummyObj = new DummyClass('atul', 1983);

console.log(dummyObj.dummyName(13));
