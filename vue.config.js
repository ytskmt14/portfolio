module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/top'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Moc Tech Life'
    }
  }
}
