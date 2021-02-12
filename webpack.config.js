const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
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
            sourceMaps: true,
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
