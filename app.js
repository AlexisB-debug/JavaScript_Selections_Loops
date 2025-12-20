console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  } else {
    continue;
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      let fizzbuzz = `fizzbuzz`;
      console.log(fizzbuzz);
    } else {
      let fizz = `fizz`;
      console.log(fizz);
    }
  } else {
    if (i % 5 == 0) {
      let buzz = `buzz`;
      console.log(buzz);
    }
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 0;

while (i < 100) {
  if (i % 2 != 0) {
    console.log(i);
    i++;
  } else {
    i++;
  }
}

i = 0;

while (i < 100) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      let fizzbuzz = `fizzbuzz`;
      console.log(fizzbuzz);
    } else {
      let fizz = `fizz`;
      console.log(fizz);
    }
  } else {
    if (i % 5 == 0) {
      let buzz = `buzz`;
      console.log(buzz);
    }
  }
  i++;
}

i = 0;

do {
  if (i % 2 != 0) {
    console.log(i);
    i++;
  } else {
    i++;
  }
} while (i < 100);

i = 0;

do {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      let fizzbuzz = `fizzbuzz`;
      console.log(fizzbuzz);
    } else {
      let fizz = `fizz`;
      console.log(fizz);
    }
  } else {
    if (i % 5 == 0) {
      let buzz = `buzz`;
      console.log(buzz);
    }
  }
  i++;
} while (i < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log(`Found value!`);
    break;
  } else {
    if (i == n) {
      console.log(`The value was not found.`);
    }
  }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0) {
    if (i % buzzDivisor == 0) {
      let fizzbuzz = `fizzbuzz`;
      console.log(fizzbuzz);
    } else {
      let fizz = `fizz`;
      console.log(fizz);
    }
  } else {
    if (i % buzzDivisor == 0) {
      let buzz = `buzz`;
      console.log(buzz);
    }
  }
}
