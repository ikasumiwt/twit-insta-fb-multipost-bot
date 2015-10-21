let __dir = '../../';
let dest = './public/'; //出力先
let src = './src'; //ソース元

module.exports = {

    dest: dest,
    src: src,
    
    js: {
        src: src + '/**', //ソース元
        dest: dest , //出力先dir
        uglify: false
    },

    webpack: {
        entry: src + '/index', //読み込み元の起点ファイル
        output: {
            filename: 'bundle.js' //output先のファイル
        },

        //babel-loaderを使う
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader?stage=0', exclude: '/node_modules/' }
            ]
        },

        resolve: {
            extensions: ['', '.js']
        }
    }

}
