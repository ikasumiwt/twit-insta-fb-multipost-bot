import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task( 'eslint', () => {

    return gulp.src( [ 'src/**/*.js' ] )
              .pipe( eslint( { useEslintrc: true } ) )
              .pipe( eslint.format() )
              .pipe( eslint.failAfterError() );
} );
