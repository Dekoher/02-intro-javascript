// console.log('hello weorld');

const name = 'Diego';
const lastName = 'Herrera';

const fullName = `
${name}
${lastName}
`

console.log(fullName);

function welcome(name) {
  return 'Hi' + name;
}

console.log(`User: ${welcome(name)}`);