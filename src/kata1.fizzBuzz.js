const fizzBuzz = (number) => {
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    }
    if (i % 3 === 0) {
      return "Fizz";
    }
    if (i % 5 === 0) {
      return "Buzz";
    }
    return i;
  }
};
module.exports = fizzBuzz;
