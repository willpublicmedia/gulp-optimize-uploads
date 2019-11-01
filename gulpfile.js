var minimist = require('minimist');
var gulp = require('gulp');
var log = require('fancy-log');
var imagemin = require('gulp-imagemin');

var config = {
    imageDir: './images/**/*'
};

var options = minimist(process.argv.slice(2), config);

gulp.task('log-value', function (done) {
    const workingdir = options.imageDir ? options.imageDir : config.imageDir;
    log(workingdir);
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