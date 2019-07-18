const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ts = require('awesome-typescript-loader');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const jsonServer = require('json-server');

const baseDir = __dirname;
const vendorDir = baseDir + '/dist';

module.exports = {
  cache: true,
  context: baseDir,
  performance: {
    hints: false
  },
  devServer: {
    contentBase: baseDir,
    compress: true,
    inline: true,
    hot: true,
    port: 4000,
    publicPath: '/build/',
    quiet: true,
    historyApiFallback: true,
    setup: function (app) {
      const filepath = path.resolve(baseDir, 'db.json');
      if (fs.existsSync(filepath)) {
        app.use('/api', jsonServer.router(filepath));
      }
    },
    stats: {
      chunks: false,
      chunkModules: false
    }
  },
  devtool: 'sourcemap',
  entry: {
    app: [
      'reflect-metadata',
      'ts-helpers',
      'zone.js',
      'main'
    ]
  },
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: path.resolve(baseDir, 'build'),
    publicPath: '/build/',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        include: [
          path.resolve(baseDir, 'app')
        ]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: './',
      manifest: require(path.resolve(vendorDir, 'vendor-manifest.json'))
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin({
      format: chalk.magenta.bold('build') + ' [' + chalk.green(':bar')+ '] ' + chalk.green.bold(':percent') + ' ' + chalk.yellow.bold(':elapsed seconds') + ' ' + chalk.white(':msg'),
      clear: false
    }),
    new ts.TsConfigPathsPlugin(),
    new ts.CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', baseDir]
  }
};
