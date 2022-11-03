console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
  return (plusNumber) => {
    return plusNumber + number;
  }
}

let plus15 = plus(15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

//console.log(users[0].name)


users.forEach((element) => {
  console.log(element.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


  let result = users.map((element, index, array) => {
    return {
      name: element.name,
      score: element.score,
    };
});

console.log(result);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");


result = users.filter(function (users){
  let addToNewArray = users.isActive;
  return addToNewArray;
});

console.log(result);


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


users.sort((a, b) => {
  console.log(a.score, b.score);
  return b.score - a.score;
});

console.log(users);













// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

const scoreSum = users.reduce((accumulator, currValue) => {
  return accumulator + currValue.score;
}, 0);

let avg = scoreSum / users.length;
console.log(scoreSum, avg);