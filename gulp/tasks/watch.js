import gulp from 'gulp';

gulp.task( 'watch', () => {

    //eslintを通す
    gulp.watch( ['src/**/*.js'], () => {

      gulp.start( [ 'eslint' ] );
    } );

    gulp.watch( ['src/**/*.js'], () => {

        gulp.start( [ 'webpack' ] );

    } );

} );
