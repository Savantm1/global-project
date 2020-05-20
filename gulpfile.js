const {
  src,
  dest,
  task,
  series,
  watch,
  parallel
} = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');

const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const {
  SRC_PATH,
  DIST_PATH,
  STYLE_LIBS,
  JS_LIBS
} = require('./gulp.config');

sass.compiler = require('node-sass');

task('clean', () => {
  return src(`${DIST_PATH}/**/*`, {
      read: false
    })
    .pipe(rm())
})

task('copy:html', () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({
      stream: true
    }));
})

task('copy:img', () => {
  return src(`${SRC_PATH}/img/**/*.*`)
    .pipe(dest(`${DIST_PATH}/img/`))
    .pipe(reload({
      stream: true
    }));
})

task('copy:fonts', () => {
  return src(`${SRC_PATH}/fonts/*.*`)
    .pipe(dest(`${DIST_PATH}/fonts/`))
    .pipe(reload({
      stream: true
    }));
})

task('copy:sprite', () => {
  return src(`${SRC_PATH}/img/icons/*.*`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({
      stream: true
    }));
})


task('styles', () => {
  return src([...STYLE_LIBS, 'src/styles/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem({
      dpr: 1, // base device pixel ratio (default: 2)
      rem: 16, // root element (html) font-size (default: 16)
      one: false // whether convert 1px to rem (default: false)
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest(DIST_PATH))
    .pipe(reload({
      stream: true
    }));
});

const libs = [
  'node_modules/jquery/dist/jquery.js',
  'src/scripts/*.js'
];


task('scripts', () => {
  return src(['src/scripts/*.js'])  //return src([...JS_LIBS, 'src/scripts/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js', {
      newLine: ';'
    }))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest(DIST_PATH))
    .pipe(reload({
      stream: true
    }));
});



task('server', () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
});

watch('./src/styles/**/*.scss', series('styles'));
watch('./src/img/icons/*.*', series('copy:sprite'));
watch('./src/img/*.*', series('copy:img'));
watch('./src/*.html', series('copy:html'));
watch('./src/fonts/*.*', series('copy:fonts'));
watch('./src/scripts/*.js', series('scripts'));


task('default', series('clean', parallel('copy:html', 'styles', 'scripts', 'copy:sprite', 'copy:img', 'copy:fonts'), 'server'));