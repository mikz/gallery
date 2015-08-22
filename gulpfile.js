var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var htmlInjector = require('bs-html-injector')

var rucksack = require('rucksack-css')
var postcss = require('gulp-postcss')

gulp.task('browser-sync', ['css'], function () {
  browserSync.use(htmlInjector, {
    files: '*.html'
  })
  browserSync.init({
    browser: [],
    server: './',
    logLevel: 'debug'
  })
})

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(postcss([rucksack()], { map: true }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['browser-sync'], function () {
  gulp.watch('css/*.css', ['css'])
})
