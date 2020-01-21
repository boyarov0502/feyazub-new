module.exports = {
  name: 'mainpage',
  src: {
    html: 'src/mainpage/index.html',
    sass: 'src/mainpage/sass/**/*.+(scss|sass)',
    js: 'src/mainpage/js/**/*.js',
    libsCss: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme.css',
      'node_modules/fancybox/dist/css/jquery.fancybox.css'
      
    ],
    libsJs: [
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/fancybox/dist/js/jquery.fancybox.js'
    ],
    images: [
      'src/mainpage/images/**/*',
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ],
    fonts: [
      'src/mainpage/fonts/**/*',
      'node_modules/slick-carousel/slick/fonts/*'
    ],
    favicon: 'src/mainpage/favicon/**/*'
  }
}