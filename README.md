# Solve for All Custom MathJS build

This is a custom build of Math.js that creates the "math-light" module
available in the [Solve for All Javascript execution environment](https://solveforall.com/docs/developer/javascript_execution).
The execution environment allows developers to write plugins to the
[Solve for All]((https://solveforall.com/) answer (search) engine in Javascript,
and by including

    const math = require('math-light');

in your plugin code, you can get most of the functionality of MathJS.

Using Math.js 2.3 as a base, the minified output of this build is 281 KB, while
the full Math.js version is 399 KB. This allows the module to load more quickly,
but it drops support for:

* Function documentation
* Big numbers
* Complex numbers
* Matrices

and other less commonly used types and functions.

The build process is based on the [custom bundling](http://mathjs.org/docs/custom_bundling.html)
instructions from MathJS, which outputs a script for standalone execution. But
this build creates a CommonJS module by following the way Math.js does its own
build ([gulpfile.js](https://github.com/josdejong/mathjs/blob/master/gulpfile.js)).

Pull requests that reduce the size of the library without sacrificing too much
functionality are very welcome! Also let me know if you want some features added
back in.

The build code is licensed with the Apache License.
