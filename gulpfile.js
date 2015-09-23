var gulp = require('gulp');
//var browserify = require('browserify');
var webpack = require('webpack');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var ENTRY = './src/build.js';
var DIST  = './dist';
var FILE = 'math-light.js';

gulp.task('bundle', function (cb) {
  var webpackConfig = {
    entry: ENTRY,
    output: {
      library: 'math-light',
      libraryTarget: 'commonjs2',
      path: DIST,
      filename: FILE
    },
    externals: [
      'crypto' // is referenced by decimal.js
    ],
    cache: false
  };

  var compiler = webpack(webpackConfig);

  compiler.run(function (err, stats) {
    if (err) {
      console.log(err);
    }

    console.log('bundled');

    cb();
  });
});

gulp.task('uglify', ['bundle'], function () {
  return gulp.src(DIST + '/' + FILE)
    .pipe(uglify({
      ie_proof: false
    }))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(DIST));
});

gulp.task('test', function () {
  return gulp.src('test/test.js')
    .pipe(mocha());  
});

gulp.task('default', ['uglify']);
