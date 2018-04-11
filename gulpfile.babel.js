// Gulpfile
var gulp = require('gulp'),
    connect = require('gulp-connect-php7'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin');

// Connects to a local webserver and reloads whenever the content is changed
gulp.task('connect', function() {
  connect.server({
    // (need to specify local PHP install location)
    base: 'assets',
    bin: 'C:/Xampp/php/php.exe',
    ini: 'C:/Xampp/php/php.ini'
  }, function (){
      browserSync({
        proxy: '127.0.0.1:8000'
      });
    });
});

// Compiling scss to css, creating a sourcemap and minifying the output
var sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(concat('styles.min.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/css'))
});

// Minify and concatenate all JS and create a sourcemap
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('js', function() {
  gulp.src('js/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
            presets: ['es2015']
        }))
  .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
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
  gulp.watch('img/*', ['images']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch(['assets/*.php', 'assets/includes/*.html', 'assets/includes/*.php', 'assets/css/*.css', 'assets/js/*.js', 'img/*']).on('change', function () {
    browserSync.reload();
  });
});

// Tasks that will happen by default
gulp.task('default', ['connect', 'watch']);