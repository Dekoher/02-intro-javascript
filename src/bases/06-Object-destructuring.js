
// Desestructuracion
// Asignacion desestructurante

const person = {
  name: 'Tony',
  age: 45,
  key: 'ironman',
}

// const { key, name, age } = person;

// console.log(key, name, age);

// const returnPerson = ({key, name, age, range = 'capitain'}) => {
//   // const { key, name, age } = person;
//   // console.log('destructuring from params=>', key, name, age, range);
//   return {
//     keyName: key,
//     years: age,
//   }
// }

const useContext = ({key, name, age, range = 'capitain'}) => {
  // const { key, name, age } = person;
  // console.log('destructuring from params=>', key, name, age, range);
  return {
    keyName: key,
    years: age,
    location: {
      lat: 123.123,
      lon: 32.231
    }
  }
}

// nested destructuring of location object
const {keyName, years, location: {lat, lon}} = useContext(person);

console.log(keyName, years);
console.log(lat, lon);