// Import modules
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

// Import projects
var cosmetology = require('./data/cosmetology'),
    therapy = require('./data/therapy'),
    osteopathy = require('./data/osteopathy');

var $ = therapy; // Active project


gulp.task('html', function () {
  return gulp.src($.src.html)
          .pipe(gulp.dest('dist/' + $.name))
          .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('sass', function () {
  return gulp.src($.src.sass)
          .pipe(sass({ outputStyle: 'compressed' }))
          .pipe(autoprefixer())
          .pipe(rename({ suffix: '.min' }))
          .pipe(gulp.dest('dist/' + $.name + '/css/'))
          .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('js', function () {
  return gulp.src($.src.js)
          .pipe(gulp.dest('dist/' + $.name + '/js/'))
          .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('libs-css', function () {
  return gulp.src($.src.libsCss)
    .pipe(concat('libs.css'))
    .pipe(uglifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/' + $.name + '/css/'))
    .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('libs-js', function () {
  return gulp.src($.src.libsJs)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/' + $.name + '/js/'))
    .pipe(browserSync.reload( {stream: true} ));
});

gulp.task('images', function () {
  return gulp.src($.src.images)
          .pipe(cache(imagemin({ verbose: true })))
          .pipe(gulp.dest('dist/' + $.name + '/images/'));
});

gulp.task('fonts', function () {
  return gulp.src($.src.fonts)
          .pipe(gulp.dest('dist/' + $.name + '/fonts/'))
});

gulp.task('favicon', function () {
  return gulp.src($.src.favicon)
          .pipe(gulp.dest('dist/' + $.name + '/favicon/'))
});

gulp.task('watch', function () {
  gulp.watch($.src.html, gulp.parallel('html'));
  gulp.watch($.src.sass, gulp.parallel('sass'));
  gulp.watch($.src.js, gulp.parallel('js'));
  gulp.watch($.src.libsCss, gulp.parallel('libs-css'));
  gulp.watch($.src.libsJs, gulp.parallel('libs-js'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './dist/' + $.name
    }
  });
});

gulp.task('clear', function() {
   return cache.clearAll();
});

gulp.task('server', gulp.parallel('watch', 'browser-sync'));

gulp.task('default', gulp.series('html', 'sass', 'js', 'libs-css', 'libs-js', 'images', 'fonts', 'favicon', 'server'));