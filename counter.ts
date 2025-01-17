/** @format */

// 2620. Counter

function createCounter(n: number): () => number {
  let count = n;

  return () => {
    let current = count;
    count = count + 1;
    return current;
  };
}

const counter = createCounter(11);
console.log(counter());
console.log(counter());
console.log(counter());
