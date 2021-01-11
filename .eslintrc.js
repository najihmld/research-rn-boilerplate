module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react-native' // add eslint-plugin-react-native as a plugin for ESLint
  ],
  rules: {
    'global-require': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react/forbid-prop-types': 'off',
    'comma-dangle': ['error', 'never']
  }
};
