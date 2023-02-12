const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css到单独文件
const ESLintPlugin = require('eslint-webpack-plugin')
const  { VueLoaderPlugin } =require('vue-loader') 
const {DefinePlugin} = require('webpack')
const CopyWebpackplugin = require("copy-webpack-plugin")

const { presetCssLoader } = require('./util/util')

module.exports = {
  mode: 'development',
  entry: './src/index.js', // webpack解析模块加载
  resolve: {
    // 自动补全扩展名
    extensions: ['.vue', '.js', '.json']
  },
  output: {
    filename: 'static/js/[name].js',
    path: undefined, // 开发环境不需要设置打包路径
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    clean: true
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true, // 热更新
    compress: true, // 压缩
    open: true,
    host: '127.0.0.1'
  },
  module: {
    rules: [
      // css
      {
        test: /\.css/i,
        use: presetCssLoader()
      },
      {
        test: /\.less/i,
        use: presetCssLoader('less-loader')
      },
      {
        test: /\.s[ca]ss/i,
        use: presetCssLoader('sass-loader')
      },
      {
        test: /\.styl/i,
        use: presetCssLoader('stylus-loader')
      }, // img
      {
        test: /\.(png|jpg|jpeg|gif|svg)/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }, // js
      {
        test: /\.[jt]s?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true, // 开启缓存，优化打包速度
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 处理html,将html文件移动到打包目录中
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin(), //压缩css
    new CssMinimizerPlugin(), // eslint
    new ESLintPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        '../node_modules/.cache/.eslintcache'
      )
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false",
    }),
      new CopyWebpackplugin({
        patterns: [
          {
            from: "public",
            to: "dist",
            globOptions:{
              ignore: ["**/index.html"]
            }
          },
        ],
      })
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    },
    // 缓存
    runtimeChunk: {
      name: entry => `runtime~${entry.name}.js`
    }
  }
}
