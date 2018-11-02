const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
/*
gulp.task
gulp.src
gulp.dest
gulp.watch
*/

// minify js
gulp.task('minify', () => 
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
)

// log message
gulp.task('message', function() {
    return console.log('Gulp is running...');
});

// copy html files
gulp.task('copy', function(){
    gulp.src('src/*html')
    .pipe(gulp.dest('dist'));
});


// compile sass
gulp.task('sass', () => 
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
)

gulp.task('imagemin', () => 
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('scripts', () => 
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('default', ['message', 'copy', 'imagemin', 'sass', 'scripts']);

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imagemin']);
    gulp.watch('src/sass/*scss', ['sass']);
    gulp.watch('src/*.html', ['copy']);
});