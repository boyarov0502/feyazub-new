module.exports = {
  name: 'osteopathy',
  src: {
    html: 'src/osteopathy/index.html',
    sass: 'src/osteopathy/sass/**/*.+(scss|sass)',
    js: 'src/osteopathy/js/**/*.js',
    libsCss: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme_feyazub.css'
    ],
    libsJs: [
      'node_modules/slick-carousel/slick/slick.js'
    ],
    images: [
      'src/osteopathy/images/**/*',
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ],
    fonts: [
      'src/osteopathy/fonts/**/*',
      'node_modules/slick-carousel/slick/fonts/*'
    ],
    favicon: 'src/osteopathy/favicon/**/*',
  }
}