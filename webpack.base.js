/* eslint-disable */
/**
 * Baseline build specification
 *
 * Defines common configurations necessary for all builds of the application.
 *
 * To specify a new configuration, create a new webpack configuration file that
 * imports this module and overrride any desired settings.
 *
 * Note that this file is written in vanilla JS so that karma is able to run it.
 */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const pathAppRoot = path.resolve(__dirname, 'src');
const pathPublic = path.resolve(__dirname, 'public');
const pathBuild = path.resolve(__dirname, 'build');
const wwwBase = '/';


const config = {

  entry: path.resolve(pathAppRoot, 'index.jsx'),

  // Specify where to find modules in order of precendence
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [pathAppRoot, 'node_modules']
  },

  output: {
    filename: '[name].bundle.js',
    path: pathBuild,
    publicPath: wwwBase,
  },

  plugins: [
    // Automcatically inject bundles into an HTML template
    new HtmlWebpackPlugin({
      template: path.resolve(pathPublic, 'index.html'),
    }),
    // Automatically move third-party dependencies to vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module, count) {
        return module.resource && module.resource.indexOf(pathAppRoot) === -1;
      },
    }),

    new webpack.EnvironmentPlugin(['DEBUG'])
  ],

  module: {
    rules: [
      {
        test: /\.(test|spec)\.js$/,
        loader: 'ignore-loader'
      },
      {
        // Compile JSX files
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
          plugins: ['transform-class-properties'],
        },
      },
      {
        // Parse SASS and resolve any relative URLs
        test: /\.[s]?css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap', // specify 'sourceMap' for resolve-url-loader
        ],
      },
      {
        // Load images as base64-encoded strings if they are small enough
        test: /(\.gif|\.jpe?g|\.png|\.svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        // Load manifest.json directly as a file without any manipulation
        test: /manifest.json$/,
        loader: 'file-loader',
      },
    ],
  },

};

module.exports = config;
