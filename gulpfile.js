var minimist = require('minimist');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');

/**
 * Set task defaults.
 */
var defaults = {
    imageDir: './images/**/*'
};

/**
 * Parse command line arguments.
 */
var options = minimist(process.argv.slice(2), defaults);

/**
 * Wrapper around gulp-imagemin allowing minification in place
 * instead of requiring separate input and output directories.
 */
gulp.task('minify-images', function () {
    const workingdir = options.imageDir ?
        options.imageDir :
        defaults.imageDir;
    
    return gulp.src(workingdir)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
})