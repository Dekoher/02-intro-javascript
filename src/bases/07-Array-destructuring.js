
// Array desctructuring

const heroes = ['ironman', 'spiderman', 'thor'];

// const [first, second] = heroes;
const [,, third] = heroes;

console.log(third);

const returnArray = () => {
  return ['ABC', 123];
}

const[letters, numbers] = returnArray();
console.log(letters, numbers);

// Task
// 1.- First array value must be named name
// 2.- Second array value must be named setName
const useState = value => {
  return [value, () => {console.log('Hello World')}];
}

const [name, setName] = useState('ironman');

console.log(name);
setName();
