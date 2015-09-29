var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');

gulp.task('cleanBuiltDir', function(){
  return gulp.src('built').pipe(rimraf());
}); 
 
gulp.task('buildServer', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('dist/'));
});

gulp.task('moveViews',[],function(){
  var move = gulp.src("src/**/*.jade")
  .pipe(gulp.dest("./dist/"));
  return move;
});

gulp.task('nodemon', ['buildServer', 'watch'], function(){
    nodemon({
        script: './dist/app.js'
    }).on('start', function(){
        console.log('nodemon started app.js');
    })
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['buildServer']);
});

gulp.task('default', ['buildServer','moveViews']);