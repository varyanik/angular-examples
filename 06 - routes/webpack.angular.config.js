const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const baseDir = __dirname;
const vendorDir = baseDir + '/dist';

const vendor = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  'core-js',
  'rxjs',
  'ts-helpers',
  'zone.js'
];

module.exports = {
  cache: true,
  context: baseDir,
  devtool: 'sourcemap',
  entry: {
    vendor: vendor
  },
  performance: {
    hints: false
  },
  output: {
    filename: '[name].js',
    path: vendorDir,
    library: '__[name]',
    sourceMapFilename: '[name].map'
  },
  node: {
    fs: 'empty',
    global: false,
    crypto: 'empty'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(vendorDir, '[name]-manifest.json'),
      name: '__[name]',
      context: baseDir
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin({
      format: chalk.magenta.bold('build') + ' [' + chalk.green(':bar')+ '] ' + chalk.green.bold(':percent') + ' ' + chalk.yellow.bold(':elapsed seconds') + ' ' + chalk.white(':msg'),
      clear: false
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join(baseDir, 'node_modules')]
  },
  stats: false
};
