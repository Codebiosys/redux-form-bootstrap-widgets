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

 'use strict';
 var path = require('path');
 var webpack = require('webpack');
 var pathAppRoot = path.resolve(__dirname, 'src');
 var config = {
     resolve: {
       extensions: ['.js', '.jsx'],
       modules: [pathAppRoot, 'node_modules']
     },
     externals: {
       react: {
         root: 'React',
         commonjs2: 'react',
         commonjs: ['react'],
         amd: 'react',
       },
       'react-dom': {
         root: 'ReactDOM',
         commonjs2: 'react-dom',
         commonjs: ['react-dom'],
         amd: 'react-dom',
       },
       'bootstrap': 'bootstrap',
       "lodash": 'lodash',
       "moment": 'moment',
       "react-datetime":'react-datetime',
       "react-toggle": 'react-toggle',
       "react-select": 'react-select',
       "react-bootstrap":'react-bootstrap'
     },

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
           presets: ['es2015', 'stage-0', 'react'],
           plugins: ['transform-class-properties'],
         },
       },
       {
           test: /\.[s]?css$/,
          //  loader: ExtractTextPlugin.extract({
          //    fallback: "style-loader",
          //    use: "css-loader"
          //  })
           use: [
             'style-loader',
             'css-loader',
             'resolve-url-loader',
             'sass-loader?sourceMap', // specify 'sourceMap' for resolve-url-loader
           ]
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
        }
     //loaders: [
    //    { test: /(\.js|\.jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ }
     ]
   },
   output: {
     library: 'ReduxFormBootstrapWidgets',
     libraryTarget: 'umd'
   },
   plugins: [
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     })
   ]
 };

 if (process.env.NODE_ENV === 'production') {
   config.plugins.push(
     new webpack.optimize.UglifyJsPlugin({
       compressor: {
         pure_getters: true,
         unsafe: true,
         unsafe_comps: true,
         warnings: false
       }
     })
   );
 }

 module.exports = config
//
//

//
// {
//   {
//     root: 'React',
//     commonjs2: './react',
//     commonjs: ['./react'],
//     amd: 'react',
//   },
// },
// {
//   'react-dom': {
//     root: 'ReactDOM',
//     commonjs2: './react-dom',
//     commonjs: ['./react-dom'],
//     amd: 'react-dom',
//   },
// },
//
// ],

// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// const pathAppRoot = path.resolve(__dirname, 'src');
// const pathBuild = path.resolve(__dirname, 'dist');
//
// const libraryName = 'redux-form-bootstrap-widgets';
// var outputFile = libraryName + '.min.js';
//
// const config = {
//   entry: path.resolve(pathAppRoot, 'index.js'),
//
//
//   // Specify where to find modules in order of precendence
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     modules: [pathAppRoot, 'node_modules']
//   },
//
//   output: {
//     path: pathBuild,
//     filename: '[name].js',
//     sourceMapFilename: '[name].map',
//     chunkFilename: '[id].js',
//     library: libraryName,
//     libraryTarget: 'umd',
//     umdNamedDefine: true,
//   },
//
//     module: {
//       rules: [
//         {
//           test: /\.(test|spec)\.js$/,
//           loader: 'ignore-loader'
//         },
//         {
//           // Compile JSX files
//           test: /(\.js|\.jsx)$/,
//           exclude: /(node_modules)/,
//           loader: 'babel-loader',
//           query: {
//             presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
//             plugins: ['transform-class-properties'],
//           },
//         },
//         {
//           // Parse SASS and resolve any relative URLs
//           test: /\.[s]?css$/,
//           loader: ExtractTextPlugin.extract({
//             fallback: "style-loader",
//             use: "css-loader"
//           })
//           // use: [
//           //   'style-loader',
//           //   'css-loader',
//           //   'resolve-url-loader',
//           //   'sass-loader?sourceMap', // specify 'sourceMap' for resolve-url-loader
//           // ],
//         },
//         {
//           // Load images as base64-encoded strings if they are small enough
//           test: /(\.gif|\.jpe?g|\.png|\.svg)(\?v=\d+\.\d+\.\d+)?$/,
//           loader: 'url-loader',
//         },
//         {
//           test: /\.(eot|ttf|woff|woff2)$/,
//           loader: 'url-loader',
//           options: {
//             limit: 10000
//           }
//         },
//       ],
//     },
//
//   plugins: [
//     // Automatically move third-party dependencies to vendor bundle
//     new ExtractTextPlugin("[name].css"),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       filename: 'vendor.[chunkhash].js',
//       minChunks(module, count) {
//         return module.resource && module.resource.indexOf(pathAppRoot) === -1;
//       },
//     })
//   ],
//
//
// };
//
// module.exports = config;
