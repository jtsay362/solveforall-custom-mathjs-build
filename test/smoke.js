var ml = require('../dist/math-light');

if (ml.eval('1 + 2') === 3) {
  console.log('Success!');
} else {
  console.log('Failure!');
}
