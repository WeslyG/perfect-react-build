const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  devServer: {
    port: 3003,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src/**/*.stories.tsx')],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            compact: true,
            cacheDirectory: false,
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      base: '/',
      template: './src/index.html',
      inject: 'body',
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
