var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
// var gls = require('gulp-live-server');

// gulp.task('serve',function(){
//   var server = gls.static();
//   server.start();
//
//   gulp.watch(['**/*.html', '**/*.css'], function(file){
//     server.notify.apply(server, [file]);
//   });
//
// });

gulp.task('connect',function(){
  connect.server({
    livereload: true
  });
});

gulp.task('html',function(){
  gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('css',function(){
  gulp.src('**/*.css')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
  gulp.watch(['**/*.html'],['html']);
  gulp.watch(['**/*.scss'],['sass']);
  gulp.watch(['**/*.css'],['css']);
})

gulp.task('default', ['connect','watch']);
