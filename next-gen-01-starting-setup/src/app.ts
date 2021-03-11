// const userName = 'Max';
// // userName = 'Chen Jie';
// let age = 30;

// age = 29;

// var result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// console.log(result);

// if (age > 20) {
//   let isOld = true;
//   console.log(isOld);
// }

// const add = (a: number, b: number = 1) => a + b;
// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(5, 3));

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// spread operator tells javascript to pull elements in the array and add them as individual values
activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

const copiedPerson = { ...person }; // perfect copy instead of a pointer pointing to the memory

const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 10, 2);
console.log(addNumbers);

// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age);
