var gulp = require('gulp'),
    less = require('gulp-less'),
    scss = require('gulp-ruby-sass'),
    rename = require('gulp-rename');


gulp.task('less', function () {
    gulp.src('./less-version/less/packages/*.less')
        .pipe(less({
            paths: ['less-version/less/components']
        }))
        .pipe(rename({ suffix: '-less', extname: '.css'}))
        .pipe(gulp.dest('./less-version/'));
});

gulp.task('scss', function () {
    gulp.src('./scss-version/scss/packages/*.scss')
    .pipe(scss({
        loadPath: ['scss-version/scss/components']
    }))
    .pipe(rename({ suffix: '-scss', extname: '.css'}))
    .pipe(gulp.dest('./scss-version/'));
});

gulp.task('watch', ['less', 'scss'], function() {
    gulp.watch(['**/*.less'], ['less']);
    gulp.watch(['**/*.scss'], ['scss']);
});

gulp.task('default', ['less', 'scss']);
