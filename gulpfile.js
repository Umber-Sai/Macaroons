const gulp = require('gulp')
const less = require('gulp-less');
const path = require('path');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const { watch } = require('gulp');


  exports.default = function() {
    // All events will be watched
    watch('src/less/*.less', { events: 'change' }, function(cb) {
        return gulp.src('./src/less/style.less')
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(concatCss("mainStyle.css"))
            // .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./src'));
    });
  };
