function create () {
  var core = require('mathjs/core');

  var math = core.create();

  math.import(require('mathjs/lib/type/number'));


  math.import(require('mathjs/lib/type/string'));

  math.import(require('mathjs/lib/type/unit'));

  math.import(require('mathjs/lib/function/arithmetic'));

  // Maybe can just get a subset
  math.import(require('mathjs/lib/function/probability'));
  math.import(require('mathjs/lib/function/statistics'));
  math.import(require('mathjs/lib/function/trigonometry'));
  math.import(require('mathjs/lib/function/units'));
  math.import(require('mathjs/lib/function/utils'));
  math.import(require('mathjs/lib/error'));
  math.import(require('mathjs/lib/expression'));
  return math;
}

module.exports = create();
