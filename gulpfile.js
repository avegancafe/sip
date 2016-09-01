var gulp = require('gulp')
var coffee = require('gulp-coffee')
var cslint = require('gulp-coffeelint')
var Server = require('karma').Server

var paths = {
  coffee: "src/**/*.coffee"
}

gulp.task('lint:coffee', function () {
  return gulp.src(paths.coffee)
    .pipe(cslint())
    .pipe(cslint.reporter())
})

gulp.task('compile:coffee', ['lint:coffee'], function () {
  var coffeeStream = coffee({bare: true}).on('error', function () {})

  return gulp.src(paths.coffee)
    .pipe(coffeeStream)
    .pipe(gulp.dest('dist/'))
})

gulp.task('spec:components', ['compile:coffee'], function (cb) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    cb()
  }).start()
})

gulp.task('default', [ 'compile:coffee' ])