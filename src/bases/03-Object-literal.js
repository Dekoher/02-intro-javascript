const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 40,
  address: {
    city: 'Malibu',
    zipCode: 123123,
    lat: 12.12312,
    lng: 14.12312,
  }
}

// console.log(person);

const person2 = { ...person, age: 59 };
person2.name = 'Peter';
console.log(person);
console.log(person2);