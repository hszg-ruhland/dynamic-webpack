// Webpack Configuration for mode = production
// npm run pro
// destination is ./dist
// compression article: https://medium.com/@poshakajay/heres-how-i-reduced-my-bundle-size-by-90-2e14c8a11c11

// external in package.json use npm rimraf to cleanup dist directory
// use dynamic lazy loading for leaflet
// scss should be compiled in vsc

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// for building compression files .gz
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// bei dev auskommentieren

const plugins = [];

plugins.push(new CompressionPlugin());
plugins.push(new HtmlWebpackPlugin({
  inject: false,
  favicon: './src/favicon.ico',
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
plugins.push( new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].[contenthash].css", // bei dev ändern
  chunkFilename: "[name].dynamic.[contenthash].css", // bei dev ändern
}));

plugins.push(new BundleAnalyzerPlugin()); // bei dev auskommentieren


module.exports = {
  devtool: false, // bei dev ganze zeile auskommentieren
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'), // bei dev dist-dev eintragen
    hashFunction: "xxhash64",
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].dynamic.[contenthash].js',
  },
  resolve: {
    extensions: [ '.ts', '.js'],
  },
  plugins,
  module: {
        rules: [
          /*
          {
            test: /\.(scss|css)$/i,
            use: [{
              loader: "style-loader",
              options: {
                attributes: {
                  nonce: "appnonce",
                },
              },
            }, "css-loader", "sass-loader"],
          }, 
          */
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
          },
          {
           test: /\.(png|jpg|gif|svg)$/i,
           type: 'asset/inline',
          },        
          {
            test: /\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
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
            test: /[\\/]node_modules[\\/](style-loader|css-loader|lz-string)[\\/]/,
            name: "base"
          },
          encodeVendor: {
            test: /[\\/]node_modules[\\/](safe-buffer|buffer|ieee754|base-x|base64-js)[\\/]/,
            name: "encode"
          },
<<<<<<< HEAD
/*          bootstrapVendor: {
            test: /[\\/]node_modules[\\/](@popperjs)[\\/]/,
            name: "btextra"
=======
          bootstrapVendor: {
            test: /[\\/]node_modules[\\/](bootstrap|@popperjs)[\\/]/,
            name: "bootstrap" 
>>>>>>> 44195fe (test)
          },
        */
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

