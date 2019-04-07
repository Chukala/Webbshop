
let gulp = require('gulp');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const changed = require('gulp-changed');
const ngAnnotate = require('gulp-ng-annotate');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant'); 
gulp.task('default', function () {
    return;
});
gulp.task('compress', () => {
    return gulp.src(['./public/assets/js/custom.js']).pipe(minify()).pipe(gulp.dest('dist/custom'));
});
gulp.task('compressAll', () => {
    return gulp.src(['./public/assets/js/*.js']).pipe(minify()).pipe(gulp.dest('dist/all'));
});
gulp.task('html', () => {
    return gulp.src('./public/index.html').pipe(htmlmin({collapseWhitespace: true
    })).pipe(gulp.dest('dist/html'));
});

const SRC = 'src/*.js';
const DEST = 'dist';
gulp.task('default', () =>
    gulp.src(SRC)
    .pipe(changed(DEST))
    // `ngAnnotate` will only get the files that
    // changed since the last time it was run
    .pipe(ngAnnotate())
    .pipe(gulp.dest(DEST))
);


(async () => {
    const files = await imagemin(['images/*.{jpg,png}'], 'build/images', {
        plugins: [imageminJpegtran(),imageminPngquant({quality: '65-80'})]
    });
})();