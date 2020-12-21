module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-undef': 0,
    curly: 0,
    'react-hooks/exhaustive-deps': 0
  }
}
