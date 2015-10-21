import gulp from 'gulp';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import webpack from 'gulp-webpack';
import config from '../configs/config';


gulp.task( 'webpack', () => {

    //indexファイルを指定してwebpackを実行する
    gulp.src( config.webpack.entry )
        .pipe( webpack( config.webpack ) )
        .pipe( gulpif( config.js.uglify, uglify() ) )
        .pipe( gulp.dest( config.js.dest ) );
} );
