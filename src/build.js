function create () {
  var core = require('mathjs/core');

  var math = core.create();

  /* Everything
  math.import(require('mathjs/lib/type'));
  math.import(require('mathjs/lib/constants'));
  math.import(require('mathjs/lib/expression'));
  math.import(require('mathjs/lib/function'));
  math.import(require('mathjs/lib/json'));
  math.import(require('mathjs/lib/error')); */

  math.import(require('mathjs/lib/type/number'));
  math.import(require('mathjs/lib/type/string'));
  math.import(require('mathjs/lib/type/unit'));
  //math.import(require('mathjs/lib/constants'));

  math['Infinity'] = Infinity;
  math['NaN']      = NaN;

  math.pi  = Math.PI;
  math.tau = Math.PI * 2;
  math.e   = Math.E;
  math.phi = 1.61803398874989484820458683436563811772030917980576286213545; // golden ratio, (1+sqrt(5))/2

  // uppercase constants (for compatibility with built-in Math)
  math.E           = math.e;
  math.LN2         = Math.LN2;
  math.LN10        = Math.LN10;
  math.LOG2E       = Math.LOG2E;
  math.LOG10E      = Math.LOG10E;
  math.PI          = math.pi;
  math.SQRT1_2     = Math.SQRT1_2;
  math.SQRT2       = Math.SQRT2;

  math.import(require('mathjs/lib/expression/function'));
  math.import(require('mathjs/lib/expression/node'));
  //math.import(require('mathjs/lib/expression/transform'));
  math.import(require('mathjs/lib/expression/parse'));
  math.import(require('mathjs/lib/expression/Parser'));
  math.import(require('mathjs/lib/function/arithmetic'));
  math.import(require('mathjs/lib/function/bitwise'));
  math.import(require('mathjs/lib/function/logical'));
  // Maybe can just get a subset
  math.import(require('mathjs/lib/function/probability'));
  math.import(require('mathjs/lib/function/statistics'));
  math.import(require('mathjs/lib/function/trigonometry'));
  math.import(require('mathjs/lib/function/units'));
  math.import(require('mathjs/lib/error'));

  return math;
}

module.exports = create();
