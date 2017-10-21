const gulp = require('gulp');
const jsValidate = require('gulp-jsvalidate');
const sloc = require('gulp-sloc');

gulp.task('validate',() =>
    gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(jsValidate())
);

gulp.task('sloc', function(){
  gulp.src(['**/*.js', '!node_modules/**'], {nodir: true})
    .pipe(sloc());
});



