const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {

  entry: {
    main: [ 'babel-polyfill', './src/js/index.js', './src/scss/style.scss' ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  // Default mode for Webpack is production.
  mode: 'development',
  // mode: 'production',

  module: {
    rules: [
      // linter js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
        },
      },
      // transpile js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      },
      // create index.css, minify, autoprefix
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Update index.css on changes
          { loader: MiniCssExtractPlugin.loader },
          // Translates CSS into CommonJS
          { loader: "css-loader", options: { url: false, sourceMap: true } },
          // Autoprefix Sass files
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(
                  {
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ],
                    flexbox: 'no-2009',
                    grid: true
                  }
                ),
              ]
            }
          },
          // Compiles Sass to CSS
          { loader: 'sass-loader' },
        ]
      },
    ]
  },

  // enable watch changes
  watch: true,
  // ignore changes on ../node_modules
  watchOptions: {
    ignored: /node_modules/
  },

  plugins: [
    // Enable Linter SCSS
    new StylelintPlugin({
      configFile: './.stylelintrc', // File to use for linting
      context: 'src/scss', // A string indicating the root of your files
      files: '**/*.scss', // Specify the glob pattern for finding files
      emitError: true, // Return errors
      fix: true // Auto fix lint css rules
    }),
    // Generate index.css on load after compile main style.scss
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    // Sync browser
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      files: [ './*html' ],
      contentBase: __dirname + '/src',
      server: { baseDir: [ './' ] }
    })
  ],

  optimization: {
    // minimizer: [
    //   // uglify JS
    //   new UglifyJsPlugin({
    //     test: /\.js(\?.*)?$/i,
    //     cache: true,
    //     parallel: true,
    //     sourceMap: false
    //   }),
    // ]
  }
};