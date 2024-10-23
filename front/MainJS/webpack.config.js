const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js', // Входной файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
    assetModuleFilename: 'assets/[name][ext]', // Настройка для вывода asset файлов
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JS файлов
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Обработка CSS файлов
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Обработка изображений
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя выходного CSS файла
    }),
    new CleanWebpackPlugin(), // Плагин для очистки папки dist перед сборкой
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }, // Копирование всех файлов из 'assets' в 'dist/assets'
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка для сервера разработки
    },
    compress: true,
    port: 9000, // Порт сервера разработки
  },
};