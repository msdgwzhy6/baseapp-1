module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/constants': './src/constants',
          '@/navigator': './src/navigator',
          '@/models': './src/models',
          '@/config': './src/config',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/hooks': './src/hooks',
          '@/services': './src/services',
          '@/styles': './src/styles',
          '@/types': './src/types',
          '@': './src'
        }
      }
    ]
  ]
}
