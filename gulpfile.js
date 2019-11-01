var gulp = require('gulp');
var log = require('fancy-log');
var imagemin = require('gulp-imagemin');

var config = {
    imageDir: './images/**/*'
};

gulp.task('log-value', function (done) {
    log(config.imageDir);
    done();
});

/**
 * Wrapper around gulp-imagemin allowing minification in place
 * instead of requiring separate input and output directories.
 */
gulp.task('minify-images', function () {
    return gulp.src(config.imageDir)
        .pipe(imagemin())
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
})