// Webpack Configuration for mode = production
// npm run pro
// destination is ./dist
// compression article: https://medium.com/@poshakajay/heres-how-i-reduced-my-bundle-size-by-90-2e14c8a11c11

// use dynamic lazy loading for leaflet
// scss should be compiled in vsc

const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

// for building compression files .gz
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [];

plugins.push(new CleanWebpackPlugin());
plugins.push(new CompressionPlugin());
plugins.push(new HtmlWebpackPlugin({
  inject: false,
  favicon: './src/favicon.svg',
  templateContent: ({htmlWebpackPlugin}) => `
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${htmlWebpackPlugin.tags.headTags}
      </head>
      <body>
      </body>
    </html>
  `
}));
/*
plugins.push(new CspHtmlWebpackPlugin({
  'script-src': '',
  'style-src': ''
}));
*/

//plugins.push(new BundleAnalyzerPlugin());


module.exports = {
  //devtool: false,//'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist-dev'),
    hashFunction: "xxhash64",
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].dynamic.[contenthash].js',
  },
  plugins,
  module: {
        rules: [
          {
            test: /\.css$/i,
            use: [{
              loader: "style-loader",
              options: {
                attributes: {
                  nonce: "appnonce",
                },
              },
            }, "css-loader"],
          }, 
            {
               test: /\.(png|jpg|gif|svg)$/i,
               type: 'asset/inline',
/*               use: [
                {
                   loader: 'url-loader',
                   options: {
                     limit: 20000,
                   },
                }],
*/
            },        
        ]
  },
  optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          baseVendor: {
            test: /[\\/]node_modules[\\/](style-loader|css-loader|base64-js|dot|lz-string)[\\/]/,
            name: "base"
          },
          encodeVendor: {
            test: /[\\/]node_modules[\\/](buffer|ieee754|basex-encoder)[\\/]/,
            name: "encode"
          },
          bootstrapVendor: {
            test: /[\\/]node_modules[\\/](bootstrap)[\\/]/,
            name: "bootstrap"
          },
        },
      },
  },    
}

/*
          vendor: {
            test: /[\\/]node_modules[\\/](!buffer)(!basex-encoder)(!base64-js)(!ieee754)(!jsencrypt)[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
*/

/* for vendor specific output 
cacheGroups: {
      reactVendor: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: "reactvendor"
      },
      utilityVendor: {
        test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
        name: "utilityVendor"
      },
      bootstrapVendor: {
        test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
        name: "bootstrapVendor"
      },
      vendor: {
        test: /[\\/]node_modules[\\/](!react-bootstrap)(!lodash)(!moment)(!moment-timezone)[\\/]/,
        name: "vendor"
      },
    },
*/

