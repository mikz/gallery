var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var htmlInjector = require('bs-html-injector')

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('browser-sync', function () {
  browserSync.use(htmlInjector, {
    files: '*.html'
  })
  browserSync.init({
    server: './',
    logLevel: 'debug'
  })
})

gulp.task('serve', ['browser-sync'], function () {
//    gulp.watch("lib/*.js", browserSync.reload);
//    gulp.watch("*.html").on("change", browserSync.reload);
//    gulp.watch("*.html", htmlInjector);
})
