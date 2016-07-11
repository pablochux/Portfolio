// Plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// Directories
var src = 'template/src/assets/web',
    cssDirectory = 'template/src/assets/web/css',
    cssMinifyDirectory = 'template/dist/assets/web/css',
    preLessDirectory = 'template/src/assets/web/less';
    lessDirectory = 'template/src/assets/web/css';

var minsrc = 'template/dist/assets/web/';


// Default minify-css
gulp.task('minify-css', function(){
    return gulp.src(src + '/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(cssMinifyDirectory));
});

gulp.task("less", function() {
    gulp.src(src + "/less/*.less")
        .pipe(less())
        .pipe(gulp.dest(src + '/css'));
});

// Default starts the server
gulp.task('default', function(){
	browserSync.init({
		server: src + "/",
		browser: "Google Chrome Canary",
		notify: false
	});

	gulp.watch(src + "/less/*.less", ['less']);
	gulp.watch(src + "/less/*.less").on("change", reload);
	gulp.watch(src + "/*.html").on("change", reload);
	gulp.watch(src + "/js/*.js").on("change", reload);
});
