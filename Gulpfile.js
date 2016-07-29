var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('Format/Sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./Format/CSS/'));
});

gulp.task('default', function() {
	gulp.watch('Format/Sass/**/*.scss',['styles']);
});