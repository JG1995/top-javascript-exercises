const add = function(a,b) {
	let result = a+b;
  return result;
};

const subtract = function(a,b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {

  if (array.length === 0) {
    return 0;
  }
  return array.reduce((product, current) => product * current, 1);
};

const power = function(integer, exponent) {

  if (integer === 0) {
    return 0;
  }
  return Math.pow(integer, exponent);
	
};

const factorial = function(number) {

  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
