function ageSort(users) {
  // Your code here 
  let age = (a, b) => {
    return a.age - b.age;
  }
  users.sort(age);
  // let res = users.map(el => el = el.firstName)
  return users;
}

function oddEvenSort(arr) {
  // Your code here 
  let helper = (a,b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a-b;
  }
  return arr.sort(helper);
  //return arr;
}

function validAnagrams(s, t) {
  // Your code here 
  let s1 = s.split('').sort();
  let t1 = t.split('').sort();

  if (s1.length !== t1.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (s1[i] !== t1[i]) return false;
  }
  return true;
}

function reverseBaseSort(arr) {
  // Your code here 
  let helper = (a,b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a-b;
  }
  return arr.sort(helper);
}

function frequencySort(arr) {
  // Your code here 
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];


const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    occupation: "Data Scientist",
    friends: [1, 4],
  },
  {
    id: 3,
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    occupation: "UX Designer",
    friends: [2, 4],
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Johnson",
    age: 55,
    occupation: "CTO",
    friends: [1, 2, 3],
  },
];

console.log(ageSort(users));