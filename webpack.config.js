const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpilar archivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Cargar archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Plantilla HTML
    }),
    new Dotenv() // Cargar variables de entorno
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};