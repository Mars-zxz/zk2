var gulp = require('gulp');
var less = require('gulp-less');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');

gulp.task('less', function() {
    gulp.src('./src/static/less/index.less')
        .pipe(less())
        .pipe(minCss())
        .pipe(gulp.dest('./src/static/css/'))
})

gulp.task('server', function() {
    gulp.src('./src')
        .pipe(server({
            port: 9184,
            open: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})

gulp.task('watch'),
    function() {
        gulp.watch(['./src/static/less/*.less'], ['less'])
    }

gulp.task('default', ['less', 'server'], function() {})