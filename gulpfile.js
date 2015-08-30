// include gulp
var gulp = require('gulp');

// include pluginss
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./scss/main.scss', ['autoprefixer']);
});

gulp.task('plumber',['sass'], function() {
    gulp.src('./src/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(uglify())
        .pipe(plumber.stop())
        .pipe(gulp.dest('./dist'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);