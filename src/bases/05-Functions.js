const hello = function (name) {
  return `Hi, ${name}`;
};

const hello2 = (name) => {
  return `Hi, ${name}`;
};

const hello3 = (name) => `Hi, ${name}`;

// console.log("function=> ", hello("Peter"));
// console.log("arrow function=> ", hello2("Peter"));
// console.log("simplified arrow function=> ", hello3("Peter"));

const getUser = () => ({
  ui: "ABS123",
  username: "abd123",
});

const user = getUser()

// console.log(user);


// Tasks
// 1.- Transform to arrow function
// 2.- The function must to return an implicit object
// 3.- Test if it runs
// function getActiveUser(name) {
//   return {
//     uid: "ABC123",
//     username: name,
//   }
// }

// Task 1

const getActiveUser = name => ({
  uid: "ABC123",
  username: name,
});

const activeUser = getActiveUser('Diego');

console.log({activeUser});
