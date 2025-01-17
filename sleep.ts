/** @format */

// 2621 Sleep
const sleep = (millis: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};

const millis = 1000;

let t = Date.now();
sleep(millis)
  .then(() => {
    return sleep(millis);
  })
  .then(() => {
    console.log(Date.now() - t); // Output: Approximately 2000 (2 seconds)
  });
