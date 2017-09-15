/* eslint-disable */
'use strict';

var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.base');

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
]);

module.exports = config;
