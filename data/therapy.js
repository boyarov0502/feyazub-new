module.exports = {
  name: 'therapy',
  src: {
    html: 'src/therapy/index.html',
    sass: 'src/therapy/sass/**/*.+(scss|sass)',
    js: 'src/therapy/js/**/*.js',
    libsCss: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme_feyazub.css'
    ],
    libsJs: [
      'node_modules/slick-carousel/slick/slick.js'
    ],
    images: [
      'src/therapy/images/**/*',
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ],
    fonts: [
      'src/therapy/fonts/**/*',
      'node_modules/slick-carousel/slick/fonts/*'
    ],
    favicon: 'src/therapy/favicon/**/*',
  }
}