var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );
var babel = require("gulp-babel");


gulp.task( 'lint', function() {
    return gulp.src( [ './bin/*.js' ] )
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failOnError() );
} );

gulp.task( 'default', [ 'lint' ], function() {
    gulp.run( 'babel' );
    gulp.run( 'watch' );
} );

gulp.task('babel', function() {
    gulp.src('./src/test.js')
        .pipe(babel())
        .pipe(gulp.dest('./test.js'))
});

gulp.task('watch', function() {
        gulp.watch('./src/test.js', ['babel'])
});

