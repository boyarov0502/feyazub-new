module.exports = {
  name: 'cosmetology',
  src: {
    html: 'src/cosmetology/index.html',
    sass: 'src/cosmetology/sass/**/*.+(scss|sass)',
    js: 'src/cosmetology/js/**/*.js',
    libsCss: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme_feyazub.css'
    ],
    libsJs: [
      'node_modules/slick-carousel/slick/slick.js'
    ],
    images: [
      'src/cosmetology/images/**/*',
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ],
    fonts: [
      'src/cosmetology/fonts/**/*',
      'node_modules/slick-carousel/slick/fonts/*'
    ],
    favicon: 'src/cosmetology/favicon/**/*',
  }
}