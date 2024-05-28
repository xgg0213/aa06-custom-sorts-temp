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
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!obj[el]) obj[el] = 1;
    else obj[el]++;
  }

  let helper = (a,b) => {
    if (obj[a] !== obj[b]) return obj[a] - obj[b];
    return b-a
  }

  arr.sort(helper);

  return arr

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];


const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

console.log(frequencySort(arr1))//.to.deep.equal([3, 1, 1, 2, 2, 2]);
console.log(frequencySort(arr2))//.to.deep.equal([1, 3, 3, 2, 2]);
console.log(frequencySort(arr3))//.to.deep.equal([5, -1, 4, 4, -6, -6, 1, 1, 1]);