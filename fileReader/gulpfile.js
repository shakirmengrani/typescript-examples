var gulp = require("gulp");
var ts = require("gulp-typescript");
var livereload = require('gulp-livereload');
	
var path = {
	script:["./src/**/*.ts"]
};

gulp.task('transpile',function(){
	return gulp.src(path.script)
	.pipe(ts({
		target:'ES5',
		module:'commonjs'
	})).pipe(gulp.dest("build/"));
});

gulp.task('default',['transpile'],function(){
	gulp.watch(path.script, ['transpile']);
});