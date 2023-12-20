module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@assets': './src/assets',
          '@modules': './src/modules',
          '@components': './src/components',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
