var gulp = require('gulp');
var sass = require('gulp-sass');
var please = require('gulp-pleeease');
var rename = require("gulp-rename");
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();

var SassOptions = {
	errLogToConsole: true
};

var PleeeaseOptions = {
	sourcemaps: false,
	filters: true,
	rem: ['14px'],
	pseudoElements: true,
	opacity: true,
	minifier: true,
	mqpacker: true,
	autoprefixer: {
		browsers: ['> 5%', 'last 10 versions', 'ie 8', 'ie 9']
	}
};

gulp.task('sass', function () {
	return gulp.src('src/assets/sass/*.scss')
		.pipe( sass( SassOptions ))
		.on( "error", function( e ) {
			console.error( e );
		})
		.pipe(please(PleeeaseOptions))
		.pipe(gulp.dest('src/css'));
});

gulp.task('css', ['sass'], function () {
	return gulp.src('src/assets/css/color.css')
		.pipe(please(PleeeaseOptions))
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['sass'],function() {
	browserSync.init({
		proxy: "localhost/maquette1/src/"
	});

	gulp.watch([ "src/assets/sass/style.scss" ], ['sass']);

	gulp.watch([
		"src/*.html",
		"src/css/*.css"
	]).on( "change", function( file ) {
		console.log( file.path );
		browserSync.reload();
	});
});
