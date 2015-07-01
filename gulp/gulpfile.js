var gulp = require("gulp");
var ts = require("gulp-typescript");
var livereload = require('gulp-livereload');
	
var path = {
	scripts:['./src/scripts/**/*.ts'],
	html:["./src/**/*.html"]
};

gulp.task('transpile',function(){
	return gulp.src(path.scripts).pipe(ts({
		target:'ES6',
		module:'commonjs'
	})).pipe(gulp.dest("build/")).pipe(livereload());
});


gulp.task('transpileView',function(){
	gulp.src(path.html).pipe(gulp.dest("build/")).pipe(livereload());
});

gulp.task('default',['transpile','transpileView'],function(){
	gulp.watch(path.html, ['transpileView']);
	gulp.watch(path.scripts, ['transpile']);
});