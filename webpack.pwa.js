// Webpack Configuration for mode = production
// npm run pro
// destination is ./dist
// compression article: https://medium.com/@poshakajay/heres-how-i-reduced-my-bundle-size-by-90-2e14c8a11c11

const path = require('path');
// for automatically create index.html with template 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// for cleaning dist directory
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// for building compression files .gz
const CompressionPlugin = require("compression-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const plugins = [];

plugins.push(new CleanWebpackPlugin());
plugins.push(new CompressionPlugin());
plugins.push(new HtmlWebpackPlugin({
  title: 'Progressive Web Application Demo',
  inject: false,
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
plugins.push(new WorkboxPlugin.GenerateSW({
       // these options encourage the ServiceWorkers to get in there fast
       // and not allow any straggling "old" SWs to hang around
       clientsClaim: true,
       skipWaiting: true,
     }));

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist-pwa'),
    filename: '[name].[contenthash].js',
  },
  plugins,
  module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          }, 
            {
               test: /\.(png|jpg|gif|svg)$/i,
               use: [{loader: 'url-loader'}],
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
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
  },    
}


