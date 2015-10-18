import gulp from 'gulp';

gulp.task( 'watch', () => {

    watch( ['src/**/*.js'], () => {

      gulp.start( [ 'eslint' ] );
    } );
} );
