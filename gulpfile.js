var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require ('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename(function (path){
    	path.extname=".min.js"
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-css', function() {
  gulp.src('./src/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(rename(function (path){
    	path.extname=".min.css"
    }))
    .pipe(gulp.dest('./dist/'))
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['minify-css', 'compress']);