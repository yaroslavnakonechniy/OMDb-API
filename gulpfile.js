const { src, dest, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('autoprefixer');

const PLUGINS = [
  autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    cascade: true
  }),
  cssnano({ preset: 'default' })
];

function scss() {
  return src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'))
    .pipe(postcss(PLUGINS))
    .pipe(browserSync.stream())
}

function syncInit () {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });
}

async function sync() {
  browserSync.reload()
}

function watchFiles() {
  syncInit()
  watch('sass/**/*.scss', scss)
  watch('./*.html', sync)
  watch('./js/**/*.js', sync)
}

function comb() {
  return src('./sass/**/*.scss')
    .pipe(csscomb('./.csscomb.json'))
    .pipe(dest('./sass'))
}

exports.default = watchFiles;
exports.comb = comb;