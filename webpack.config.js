const webpack = require('webpack');
const path = require('path');
const ExtactTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/js/main.js',
            './src/styles/style.pcss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.pcss$/,
                exclude: /node_modules/,
                use: ExtactTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', 
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtactTextPlugin('assets/style.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                historyApiFallback: {
                    index: '/'
                }
            }
        })
    ],
    devServer: {
        historyApiFallback: true
    }
    
}