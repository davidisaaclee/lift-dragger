'use strict';

var _          = require('lodash');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var browserify  = require('browserify');
// var coffeeify  = require('gulp-coffeeify');
var coffeeify  = require('coffeeify');
var jade       = require('gulp-jade');
var notify     = require('gulp-notify');
var source     = require('vinyl-source-stream');
var watch      = require('gulp-watch');
var buffer     = require('vinyl-buffer');
var del        = require('del');


var options = {};

options['coffee'] = {
  src: './src/**/*.coffee',
  dst: './build',
  options: {
    debug: true,
    basedir: __dirname + '/src',
    paths: [__dirname + '/node_modules', __dirname + '/src'],
    dest: './build',
    extensions: ['.coffee']
  }
};

options['sass'] = {
  src: './src/**/*.scss',
  dst: './build'
};

options['jade'] = {
  src: './src/**/*.jade',
  dst: './build/',
  options: {
    pretty: true
  }
};

gulp.task('default', ['coffee', 'demo_script', 'jade', 'sass', 'watch']);
gulp.task('coffee', function () {
  var bundle = browserify(_.extend(options.coffee.options, {
    entries: './lift-dragger.coffee',
    outputName: 'lift-dragger.js',
    transform: [coffeeify]
  })).bundle();

  bundle
    .on('error', notify.onError({
      title: "CoffeeScript error",
      message: '<%= error.message %>',
      sound: "Frog", // case sensitive
      icon: false
    }))
    .on('error', function (error) {
      console.log(error);
    });

  return bundle
    .pipe(source('lift-dragger.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});

gulp.task('demo_script', function () {
  var bundle = browserify(_.extend(options.coffee.options, {
    entries: './demo/lift-dragger-demo.coffee',
    outputName: 'lift-dragger-demo.js',
    transform: [coffeeify]
  })).bundle();

  bundle
    .on('error', notify.onError({
      title: "CoffeeScript error",
      message: '<%= error.message %>',
      sound: "Frog", // case sensitive
      icon: false
    }))
    .on('error', function (error) {
      console.log(error);
    });

  return bundle
    .pipe(source('lift-dragger-demo.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/demo'));
});

gulp.task('sass', function () {
  return gulp.src(options.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(options.sass.dst));
});

gulp.task('jade', function () {
  return gulp.src(options.jade.src)
    .pipe(jade(options.jade.options))
    .pipe(gulp.dest(options.jade.dst))
});

gulp.task('watch', function () {
  gulp.watch(options.coffee.src, ['coffee', 'demo_script']);
  gulp.watch(options.sass.src, ['sass']);
  gulp.watch(options.jade.src, ['jade']);
});


gulp.task('clean', function () {
  del([
    'build/**'
  ]);
});

function onError (err) {
  console.log(err);
  notify.onError({
    message: 'Error: <%= error.message %>',
    sound: false // deactivate sound?
  })
  this.emit('end');
}