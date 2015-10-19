import gulp from 'gulp';
import eslint from 'gulp-eslint';

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
        entry: src + '/js/app.js',
        output: {
            filename: 'bundle.js'
        },

        resolve: {
            extensions: ['', '.js']
        }
    }

}
