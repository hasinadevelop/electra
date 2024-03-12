// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
module.exports = (env) => {
  return {
    entry: './src/index.js',
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.tsx'],
    },
    output: {
      // eslint-disable-next-line no-undef
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    mode: env.NODE_ENV || 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          // eslint-disable-next-line no-undef
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
};
