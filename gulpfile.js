// Gulpfile
var gulp = require('gulp');

// Error messages
var gutil = require('gulp-util');

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

// Compiling scss to css
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('scss/styles.scss')
  .pipe(sass({style: 'compressed'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets/css'))
});

// Minify all JS
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('assets/js'))
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('scss/styles.scss', ['sass']);
});