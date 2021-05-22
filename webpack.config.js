const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    mode: process.env.NODE_ENV,
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // style-loader: Creates `style` nodes from JS strings
                    devMode ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '/build/main.css' },
                    },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            },
        ],
    },
    devServer: {
      publicPath: '/build/',
      proxy: {
          '/api': 'http://localhost:3000/',
      }
    }
};