const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

// Html Auto generator
const HtmlPlugin = new HtmlWebpackPlugin({
  title: 'Karbon14',
  template: require('html-webpack-template'),
  appMountId: 'app',
  favicon: 'src/favicon.ico',
  baseHref: '/',
  inject: false,
  mobile: true,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content: 'Karbon14 home'
    }
  ]
})

const getPlugins = argv => {
  let plugins = [
    HtmlPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(argv.mode),
      'process.env.API_URL': JSON.stringify(
        process.env.API_URL || 'http://localhost:80/v1'
      ),
      'process.env.CROWDSALE_URL': JSON.stringify(
        process.env.CROWDSALE_URL || 'https://crowdsale.karbon14.org'
      ),
      'process.env.NETWORK': JSON.stringify(process.env.NETWORK || '3')
    })
  ]

  if (argv.mode === 'production') {
    plugins = [
      ...plugins,
      new CopyWebpackPlugin([
        {
          from: './_redirects',
          to: './_redirects',
          toType: 'file'
        },
        {
          from: './_headers',
          to: './_headers',
          toType: 'file'
        }
      ])
    ]
  }

  return plugins
}

module.exports = (env, argv) => ({
  // Don't directly expose sourcemaps on production
  devtool: argv.mode === 'production' ? false : 'eval-source-map',
  // webpack-dev-server configurations
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  // Entry of the project, use babel polyfill.
  // Can be configured to split into diferent files.
  entry: {
    bundle: [
      'whatwg-fetch',
      'babel-polyfill',
      'url-search-params-polyfill',
      'moment',
      'moment-timezone',
      `${APP_DIR}/index.js`
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    // Set up loaders to process your files
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      },
      {
        test: /\.js$/,
        include: [APP_DIR],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css/,
        use: [{ loader: 'to-string-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss/,
        use: [{ loader: 'babel-loader' }, { loader: 'styled-jsx-css-loader' }]
      }
    ]
  },
  plugins: getPlugins(argv),
  resolve: {
    alias: {
      react: require.resolve('react')
    },
    // Allow us to use peerDependencies on library packages
    modules: ['node_modules', path.join(__dirname, 'node_modules')]
  }
})
