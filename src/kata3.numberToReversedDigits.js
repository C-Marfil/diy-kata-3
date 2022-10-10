const numberToReversedDigits = (number) => {
 const array = number.split("").reverse().map(Number);
 return array;
};
module.exports = numberToReversedDigits;
