# Problem Set 7

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on creating and manipulating arrays within functions.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-7`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.

```
$ cd ~/Desktop/APCSP
```

3. Clone my skeleton repository into a directory named `pset-7`.

```
$ git clone git@github.com:ap-principles-ucvts/pset-7-skeleton.git pset-7
```

4. Change into your newly created `pset-7` directory.

```
$ cd pset-7
```

5. Overwrite the remote, which originally points at my skeleton repository.

```
$ git remote rename origin upstream
```

6. Add a new remote that points at your `pset-7` repository. Replace `YOUR-USERNAME` with your actual username.

```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-7.git
```

7. Open up the `exercises.js` file, which is in the `src` folder. All your `.js` files should go in the `src` folder.

The first exercise is partially done for you (the input verification part, anyway). You'll be on your own for the rest. There are a lot of exercises in this problem set, but none of them are too challenging. Take your time and try not to get frustrated.

Don't touch the `module.exports` code at the end of the file. This allows you to run your functions from the `grader.js` file.

## Exercises

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems and return the desired values. Your code must meet the requirements set forth in this section. Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1 (`commonEnd`)

Given two arrays, `a` and `b`, return `true` if the arrays have either the same first element or the same last element. The arrays must meed the following specifications, otherwise you should return `false`. Use strict equality when making your comparisons.

- `a` and `b` must not be `undefined`
- `a` and `b` must have a length of at least `1`

I've written the input verification portion of this exercise (i.e., the stuff that makes sure the above specifications are met). You'll need to finish the remainder of the exercise. Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 2 (`endsMeet`)

Given an array, `values`, return a new array comprised of the first and last `n` elements of the original array. The input array must meet the following specifications, otherwise you should return an empty array.

- `values` must not be `undefined`
- `values` must have a length of at least `n`
- `n` must be a non-negative integer

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 3 (`difference`)

Given an array, `numbers`, return the difference between the largest and smallest values. The input array must meet the following specifications, otherwise you should return `undefined`.

- `numbers` must not be `undefined`
- `numbers` must have a length of at least `1`
- `numbers` must be entirely numeric

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 4 (`max`)

Given an array, `numbers`, return the largest value among the first, middle, and last elements in the array. The input array must meet the following specifications, otherwise you should return `undefined`.

- `numbers` must not be `undefined`
- `numbers` must have an odd length of at least `3`
- `numbers` must be entirely numeric

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 5 (`middle`)

Given an array, `values`, return a new array comprised of the middle three elements of the original array. The input array must meet the following specifications, otherwise you should return an empty array.

- `values` must not be `undefined`
- `values` must have an odd length of at least `3`

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 6 (`increasing`)

Given an array, `numbers`, return `true` if there exists three consecutively increasing numbers somewhere in the array. The input array must meet the following speciications, otherwise you should return `false`.

- `numbers` must not be `undefined`
- `numbers` must have a length of at least `3`
- `numbers` must be entirely numeric
- `numbers` must contain only integers

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 7 (`everywhere`)

Given an array, `values`, and a target, `x`, return `true` if `x` is _everywhere_ in the array. A target defined as being _everywhere_ if it is located adjacent to every other element. The input array and target must meet the following specifications, otherwise you should return `false`. Use strict equality when making your comparisons.

- `values` must not be `undefined`
- `values` must have a length of at least `1`
- `x` must not be `undefined`

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 8 (`consecutive`)

Given an array, `numbers`, return `true` if the array contains three consecutive even or three consecutive odd numbers. The input array must meet the following specifications, otherwise you should return `false`.

- `numbers` must not be `undefined`
- `numbers` must have a length of at least `3`
- `numbers` must be entirely numeric
- `numbers` must contain only integers

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 9 (`balance`)

Given an array, `numbers`, return `true` if it is possible to split the array so that the sum of the left half is equal to the sum of the right half. The input array must meet the following specifications, otherwise you should return `false`.

- `numbers` must not be `undefined`
- `numbers` must have a length of at least `2`
- `numbers` must be entirely numeric
- `numbers` must contain only integers

Use the provided `grade.js` file to verify your code against my test cases.

### Exercise 10 (`clumps`)

Given an array, `values`, return the number of _clumps_ in the array. A _clump_ is defined as a consecutive series of two or more identical values. The input array must meet the following specifications, otherwise you should return `-1`. Use strict equality when making your comparisons.

- `values` must not be `undefined`

Use the provided `grade.js` file to verify your code against my test cases.

## Deliverables

You can test each of your functions indivually by running the `grader.js` file with the appropriate flag. The flag should represent either the function you wish to test, or `all` to test everything at once.

For example, you can test the `commonEnd` function with the following command.

```
node grader.js commonEnd
```

This outputs all failed test cases, which includes the arguments passed into the function, the expected output, and the actual output.

```
Test Case 322 -- Fail.
  - call: commonEnd(["one", "two"], ["three", "four"])
  - expected: false
  - actual: true

commonEnd -- passed 312 out of 325 test cases.
```

Your job is the write correct code that passes each test case for every exercise.

 - `commonEnd` - 324 test cases
 - `endsMeet` - 96 test cases
 - `difference` - 14 test cases
 - `max` - 23 test cases
 - `middle` - 21 test cases
 - `increasing` - 18 test cases
 - `everywhere` - 135 test cases
 - `consecutive` - 19 test cases
 - `balance` - 17 test cases
 - `clumps` - 16 test cases 

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

- January 20, 2020, at 11:59pm.

If you submit your problem set at midnight (i.e., January 21, 2020, at 12:00am), it is considered **late**!

### Submission Requirements

- Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
- There must be **at least** 15 unique commits to your repository.
- Your code must meet each requirement outlined in the _Exercises_ and _Deliverables_ sections.
- Your code must adhere to the course style guidelines.

Happy coding!
