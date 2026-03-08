console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      const fizzbuzz = "fizzbuzz";
      console.log(fizzbuzz);
    } else {
      const fizz = "fizz";
      console.log(fizz);
    }
  } else {
    if (i % 5 === 0) {
      const buzz = "buzz";
      console.log(buzz);
    }
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  } else {
    i++;
  }
}

i = 1;

while (i <= 100) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      const fizzbuzz = "fizzbuzz";
      console.log(fizzbuzz);
    } else {
      const fizz = "fizz";
      console.log(fizz);
    }
  } else {
    if (i % 5 === 0) {
      const buzz = "buzz";
      console.log(buzz);
    }
  }
  i++;
}

i = 1;

do {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  } else {
    i++;
  }
} while (i <= 100);

i = 1;

do {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      const fizzbuzz = "fizzbuzz";
      console.log(fizzbuzz);
    } else {
      const fizz = "fizz";
      console.log(fizz);
    }
  } else {
    if (i % 5 === 0) {
      const buzz = "buzz";
      console.log(buzz);
    }
  }
  i++;
} while (i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const value = Math.round(Math.random() * 500);
const n = Math.round(Math.random() * (500 - 100) + 100);

// for (let i = 0; i <= n; i++) {
//   if (i === value) {
//     console.log("Found value!");
//     break;
//   } else {
//     if (i === n) {
//       console.log("The value was not found.");
//     }
//   }
// }

let found = false;

for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("The value was not found.");
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
const buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
const end = Math.round(Math.random() * (1000 - 1) + 1);
const start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor === 0) {
    if (i % buzzDivisor === 0) {
      const fizzbuzz = "fizzbuzz";
      console.log(fizzbuzz);
    } else {
      const fizz = "fizz";
      console.log(fizz);
    }
  } else {
    if (i % buzzDivisor === 0) {
      const buzz = "buzz";
      console.log(buzz);
    }
  }
}
