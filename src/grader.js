const staff = require("./staff");
const student = require("./exercises");
const tests = require("../config/tests.json");
const fn = process.argv[2];

/*
 * Parse requested function to test.
 */

switch (fn) {
  case "all":
    testCommonEnd();
    testEndsMeet();
    testDifference();
    testMax();
    testMiddle();
    testIncreasing();
    testEverywhere();
    testConsecutive();
    testBalance();
    testClumps();
    break;
  case "commonEnd":
    testCommonEnd();
    break;
  case "endsMeet":
    testEndsMeet();
    break;
  case "difference":
    testDifference();
    break;
  case "max":
    testMax();
    break;
  case "middle":
    testMiddle();
    break;
  case "increasing":
    testIncreasing();
    break;
  case "everywhere":
    testEverywhere();
    break;
  case "consecutive":
    testConsecutive();
    break;
  case "balance":
    testBalance();
    break;
  case "clumps":
    testClumps();
    break;
  default:
    console.log(`Unrecognized exercise: ${fn}.\n`);
    console.log("Available exercises:");

    for (const exercise in staff) {
      console.log(`  - ${exercise}`);
    }
}

/**
 * Tests the commonEnd function.
 */

function testCommonEnd() {  
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "commonEnd";
  });

  let tc = 0;
  let pass = 0;
  for (let a of parameters[0].values) {
    for (let b of parameters[1].values) {
      const expected = staff.commonEnd(a, b);
      const actual = student.commonEnd(a, b);

      if (expected !== actual) {
        console.log(`Test Case ${tc + 1} -- Fail.`);
        console.log(`  - call: commonEnd(${format(a)}, ${format(b)})`);
        console.log(`  - expected: ${expected}`);
        console.log(`  - actual: ${actual}\n`);
      } else {
        pass++;
      }

      tc++;
    }
  }
  console.log(`commonEnd -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the endsMeet function.
 */

function testEndsMeet() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "endsMeet";
  });

  let tc = 0;
  let pass = 0;
  for (const values of parameters[0].values) {
    for (const n of parameters[1].values) {
      const expected = staff.endsMeet(values, n);
      const actual = student.endsMeet(values, n);

      if (!isEqual(expected, actual)) {
        console.log(`Test Case ${tc + 1} -- Fail.`);
        console.log(`  - call: endsMeet(${format(values)}, ${n})`);
        console.log(`  - expected: ${format(expected)}`);
        console.log(`  - actual: ${format(actual)}\n`);
      } else {
        pass++;
      }

      tc++;
    }
  }
  console.log(`endsMeet -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the difference function.
 */

function testDifference() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "difference";
  });

  let tc = 0;
  let pass = 0;
  for (const numbers of parameters[0].values) {
    const expected = staff.difference(numbers);
    const actual = student.difference(numbers);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: difference(${format(numbers)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`difference -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the max function.
 */

function testMax() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "max";
  });

  let tc = 0;
  let pass = 0;
  for (const numbers of parameters[0].values) {
    const expected = staff.max(numbers);
    const actual = student.max(numbers);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: max(${format(numbers)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`max -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the middle function.
 */

function testMiddle() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "middle";
  });

  let tc = 0;
  let pass = 0;
  for (const values of parameters[0].values) {
    const expected = staff.middle(values);
    const actual = student.middle(values);

    if (!isEqual(expected, actual)) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: middle(${format(values)})`);
      console.log(`  - expected: ${format(expected)}`);
      console.log(`  - actual: ${format(actual)}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`middle -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the increasing function.
 */

function testIncreasing() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "increasing";
  });

  let tc = 0;
  let pass = 0;
  for (const numbers of parameters[0].values) {
    const expected = staff.increasing(numbers);
    const actual = student.increasing(numbers);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: increasing(${format(numbers)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`increasing -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the everywhere function.
 */

function testEverywhere() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "everywhere";
  });

  let tc = 0;
  let pass = 0;
  for (const values of parameters[0].values) {
    for (const x of parameters[1].values) {
      const expected = staff.everywhere(values, x);
      const actual = student.everywhere(values, x);

      if (expected !== actual) {
        console.log(`Test Case ${tc + 1} -- Fail.`);
        console.log(`  - call: everywhere(${format(values)}, ${x})`);
        console.log(`  - expected: ${expected}`);
        console.log(`  - actual: ${actual}\n`);
      } else {
        pass++;
      }

      tc++;
    }
  }
  console.log(`everywhere -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the consecutive function.
 */

function testConsecutive() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "consecutive";
  });

  let tc = 0;
  let pass = 0;
  for (const numbers of parameters[0].values) {
    const expected = staff.consecutive(numbers);
    const actual = student.consecutive(numbers);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: consecutive(${format(numbers)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`consecutive -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the balance function.
 */

function testBalance() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "balance";
  });

  let tc = 0;
  let pass = 0;
  for (const numbers of parameters[0].values) {
    const expected = staff.balance(numbers);
    const actual = student.balance(numbers);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: balance(${format(numbers)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`balance -- passed ${pass} out of ${tc} test cases.`);
}

/**
 * Tests the clumps function.
 */

function testClumps() {
  const { parameters } = tests.exercises.find((exercise) => {
    return exercise.name === "clumps";
  });

  let tc = 0;
  let pass = 0;
  for (const values of parameters[0].values) {
    const expected = staff.clumps(values);
    const actual = student.clumps(values);

    if (expected !== actual) {
      console.log(`Test Case ${tc + 1} -- Fail.`);
      console.log(`  - call: clumps(${format(values)})`);
      console.log(`  - expected: ${expected}`);
      console.log(`  - actual: ${actual}\n`);
    } else {
      pass++;
    }

    tc++;
  }
  console.log(`clumps -- passed ${pass} out of ${tc} test cases.`);
}

///////////////////// HELPER FUNCTIONS /////////////////////////////////////////////////

/**
 * Determines the equality of two arrays.
 * 
 * @param {*} expected the expected array.
 * @param {*} actual  the actual array.
 * @return true if both arrays are equal, otherwise false.
 */

function isEqual(expected, actual) {
  if (!expected && !actual) {
    return true;
  } else if (expected && !actual || !expected && actual) {
    return false;
  } else if (expected.length !== actual.length) {
    return false;
  }

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Formats an array parameter for printing.
 *
 * @param {*} arr the array to be formatted.
 * @return the print-formatted array.
 */

function format(arr) {
  if (!arr) {
    return undefined;
  }

  let formatted = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (typeof arr[i] === "string") {
        formatted = formatted + ((i === arr.length - 1) ? `\"${arr[i]}\"` : `\"${arr[i]}\", `);
      } else if (typeof arr[i] === "number") {
        formatted = formatted + ((i === arr.length - 1) ? `${arr[i]}` : `${arr[i]}, `);
      }
    } else {
      formatted = formatted + ((i === arr.length - 1) ? "undefined" : "undefined, ");
    }
  }

  return `[${formatted}]`;
}
