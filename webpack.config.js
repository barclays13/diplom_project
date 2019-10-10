const path = require('path');

module.exports = {
   entry: {
       main: './src/index.js',
       mozaika: './src/indexMozaika.js',
       schelkovo: './src/indexSchelkovo.js'
   },
   output: {
       path: path.resolve(__dirname,'./dist'),
       filename: "[name].js",
       publicPath: '/dist'
   },
   devtool: "source-map",
   devServer: {
       overlay: true
   },
   module: {
       rules: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: '/node_modules/'
           }
       ]
   }
   
};