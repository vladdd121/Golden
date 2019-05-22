var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('js', function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'));
});

gulp.task('css', function(){
    return gulp.src('src/css/**/*.css')
    .pipe(autoprefixer({
        browsers: ['cover 99.5%'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('img', function(){
    return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('watch', function(){
    gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload);
    gulp.watch('src/css/**/*.css', gulp.series('css')).on('change', browserSync.reload);
    gulp.watch('src/img/**/*', gulp.series('img')).on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('default', gulp.series(
    gulp.parallel(
        'html',
        'css',
		'js',
        'img'
    ),
    gulp.parallel(
        'serve',
        'watch'
    )
));