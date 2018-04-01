'use strict';

/* ============================================================ *\
	HTML
\* ============================================================ */

var fs              = require('fs');
var livereload      = require('gulp-livereload');
var path            = require('path');

module.exports = function(gulp, config, tasks) {

	gulp.task('watch:html', function () {
		gulp.watch([path.join(config.paths.dest.html, '/**/*.html')], function(file) {
        	livereload.changed(file.path);
		});
	});

	tasks.watch.push('watch:html');

};
