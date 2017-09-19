const gulp = require('gulp');
const jsValidate = require('gulp-jsvalidate');

gulp.task('validate',() =>
    gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(jsValidate())
);
