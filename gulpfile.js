var gulp = require('gulp');
var ngHtml2Js = require('gulp-ng-html2js');
var concat = require('gulp-concat');
var karma = require('gulp-karma');

gulp.task('templates', function() {
  return gulp.src('./app/components/**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'templates',
      prefix: './components/'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./app/_temp'));
});

gulp.task('test', ['templates'], function() {
  return gulp.src('undefined.js')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

