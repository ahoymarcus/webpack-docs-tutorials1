const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


// Tell Express to use the webpack-dev-middleware and use 
//  webpack.config.js configuration file as a base
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);


app.listen(3000, () => console.log('Webpack-Express example running on port 3000\n'));

