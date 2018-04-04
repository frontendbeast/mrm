'use strict';

/* ============================================================ *\
	JS / SCRIPTS
\* ============================================================ */

var fs              = require('fs');
var gulpif          = require('gulp-if');
var livereload      = require('gulp-livereload');
var path            = require('path');

var babel           = require('gulp-babel');

module.exports = function(gulp, config, tasks) {

  config.task.scripts = require('../gulp_config/task.scripts.js')(config);

console.log(config.paths.src.scripts, config.paths.dest.scripts)


	gulp.task('scripts', function () {
		return gulp.src([path.join(config.paths.src.scripts, '/**/*.js')])
      .pipe(babel(config.task.scripts.babel))
			.pipe(gulp.dest(config.paths.dest.scripts))
			.pipe(gulpif(config.isWatched, livereload()));
	});

	gulp.task('watch:scripts', function () {
		gulp.watch([path.join(config.paths.src.scripts, '/**/*.js')], ['scripts']);
	});

	tasks.default.push('scripts');
	tasks.watch.push('watch:scripts');

};
