// Gulpfile
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin');

// Connects to a local webserver
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// Reloads the page whenever HTML content has changed
gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(livereload());
});

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

// Minify and concatenate all JS and create a sourcemap
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

// Minifies the images
gulp.task('images', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
});

// Watch for file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('img/*', ['images']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('scss/styles.scss', ['sass']);
  gulp.watch(['*.html', 'scss/styles.scss', 'js/*.js', 'img/*'], ['html']);
});

// Tasks that will happen by default
gulp.task('default', ['connect', 'watch']);