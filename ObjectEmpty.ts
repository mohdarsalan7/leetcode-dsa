/** @format */

// Object Empty

const obj = {};

function isObjectEmpty(obj: Object) {
  return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty(obj));
