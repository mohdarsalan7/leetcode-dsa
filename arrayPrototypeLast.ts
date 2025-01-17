/** @format */

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (!this.length) return -1;

  if (this.length === 1) return this[0];

  return this[this.length - 1];
};

const arr: number[] = [1, 2, 3];
console.log(arr.last());

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
