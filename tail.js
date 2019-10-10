const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎  👎  👎  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍  👍  👍  Assertion Passed: ${actual} === ${expected}`);
  }
};

let tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

assertEqual(tail([1,2,3]).toString(), [2,3].toString());