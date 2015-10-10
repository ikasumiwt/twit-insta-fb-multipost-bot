var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );


gulp.task( 'lint', function() {
    return gulp.src( [ './bin/*.js' ] )
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failOnError() );
} );

gulp.task( 'watch', function() {
    gulp.watch( './src/*.js', function( event ) {

      watcher.on('change', function(event) {
        console.log('File running tasks...');
      });
        //gulp.run( 'lint' );
    } );
} );

gulp.task( 'default', [ 'lint' ], function() {
    gulp.run( 'watch' );
} );
