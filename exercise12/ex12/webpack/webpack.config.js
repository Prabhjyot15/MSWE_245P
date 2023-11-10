// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 3000;

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        host: 'localhost',
        contentBase: path.resolve(__dirname, "./public"),
        index: "index.html",
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
        filename: "index.html",
        manifest: "./public/manifest.json",
      }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [

            // First Rule
            {
              test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env"],
                    plugins: ['syntax-dynamic-import'],
                  },
                },
            },
            {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            // Second Rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
        extensions: ["*",'.js', '.jsx', '.ts', '.tsx'],
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
            }
          }
        ]
    }
};

module.exports = {
    mode: 'development',  
    resolve: {
      extensions: ['*','.js', '.jsx', '.ts', '.tsx'],
    },
    entry: './src/index.js',
    output: {
        publicPath: '/',
      filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
              plugins: ['syntax-dynamic-import'],
            },
          },
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: [
              'style-loader', 
              'css-loader', 
          ]
      },
        // {
        //   test: /\.css$/,
        //   use: [
        //     {
        //       loader: 'style-loader'
        //     },
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //         sourceMap: true
        //       }
        //     }
        //   ]
        // }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      hot: true,
      historyApiFallback: true,
      open: true
    }
  };