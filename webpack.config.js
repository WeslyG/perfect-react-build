const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pluginListArr = [
  new HtmlWebpackPlugin({
    base: '/',
    template: './src/index.html',
    inject: 'body',
  }),
];

if (process.env.BUILD_EXPECT) {
  pluginListArr.push(new BundleAnalyzerPlugin());
}

const config = {
  entry: './src/index.tsx',
  target: 'browserslist',
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
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: pluginListArr,
};

module.exports = config;