// a function named calculateNumber. It should accepts
// two arguments (number) a and b
// The function should round a and b and return the sum of it

function calculateNumber(a, b) {
  const sum = a + b;
  return Math.ceil(sum);
}
module.exports = calculateNumber;
