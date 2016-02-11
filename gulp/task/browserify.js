var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
  return gulp.src(['../../public/script/*.js'])
   .pipe(browserify())
   .pipe(uglify())
   .pipe(gulp.dest('../../public/dist'));
});
