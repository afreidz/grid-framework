var gulp = require('gulp'),
    less = require('gulp-less'),
    scss = require('gulp-ruby-sass'),
    rename = require('gulp-rename');


gulp.task('less', function () {
    gulp.src('less/packages/style.less')
        .pipe(less({
            paths: ['less/components']
        }))
        .pipe(rename('style-less.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('scss', function () {
    gulp.src('scss/packages/style.scss')
    .pipe(scss({
        loadPath: ['scss/components']
    }))
    .pipe(rename('style-scss.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(['**/*.less'], ['less']);
    gulp.watch(['**/*.scss'], ['scss']);
});

gulp.task('default', ['watch','less', 'scss']);
