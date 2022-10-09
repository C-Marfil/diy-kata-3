const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisableBy5 = number % 5 === 0;

isDivisableBy3 && isDivisableBy5 ? "FizzBuzz"
    : isDivisableBy3 ? "Fizz"
    : isDivisableBy5 ? "Buzz"
    : number;
}
module.exports = fizzBuzz;
