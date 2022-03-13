const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
};


module.exports = {
    mode,
    // entry:{
    //     main: './src/inde.js',
    //     scripts: './src/scripts.js'
    // }, // если несколько точек входа
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true //для очистки папки dist
    },//папка для картинок
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },// для выделения сторонних библиотек в отдельный файл
    plugins: [new HTMLWebpackPlugin({
        template: './src/index.html',

    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    })],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'//для отображения картинок через html
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }

                        }
                    },
                    'sass-loader']
            },
            {
                test: /\.(jpg|svg|png|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.pug$/i,
                loader: 'pug-loader',

            },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
}