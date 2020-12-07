var path = require('path')
var { resolve } = path 
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log(111)


module.exports = {
  entry: {
    app: resolve(__dirname, 'app/index.jsx'),
    vendor: Object.keys(pkg.dependencies) // 第三方依赖单独打包
  },
  output: {
    path: __dirname + '/build',
    filename: '/js/[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('app')],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin('style', 'style-loader!css-loader!postcss-loader!less-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractTextPlugin('style', 'postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/img/[name].[chunkhash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/media/[name].[chunkhash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/font/[name].[chunkhash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('copyright by zhangyefei'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.uglifyOptions({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8089'
    }),
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css')
  ]
}