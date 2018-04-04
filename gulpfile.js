// Gulpfile
var gulp = require('gulp');

// Compiling scss to css, creating a sourcemap and minifying the output
var sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/css'))
});

// Minify all JS and create a sourcemap
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('js/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/js'))
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('scss/styles.scss', ['sass']);
});