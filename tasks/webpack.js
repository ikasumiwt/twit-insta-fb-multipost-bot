import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'gulp-webpack';
import config from './config';

let __dir = '../../';
let dest = './public/';
let src = './src';

module.exports = {

    dest: dest,

    js: {
        src: src + '/js/**',
        dest: dest + '/js',
        uglify: false
    },

    webpack: {
        entry: src + '/js/index.js', //起点ファイル
        output: {
            filename: 'bundle.js' //output先のファイル
        },

        resolve: {
            extensions: ['', '.js']
        }
    }

}

gulp.task( 'webpack', () => {

    //indexファイルを指定してwebpackを実行する
    gulp.src( config.webpack.entry )
        .pipe( webpack( config.webpack ) )
        .pipe( gulpif( config.js.uglify, uglify() ) )
        .pipe( gulp.dest( config.js.dest ) );
} );
