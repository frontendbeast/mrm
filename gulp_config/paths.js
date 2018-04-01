'use strict';

function getPaths(config) {
	var path = require('path');

	var dirs = {
		"dest": "public",
		"css": "styles",
		"root": "./",
		"sass": "sass",
		"src": "source",
		"jekyll": "jekyll",
		"tasks": "gulp_tasks"
	};

	var base = {
		dest: path.join(dirs.root, dirs.dest),
		src: path.join(dirs.root, dirs.src)
	};

	var paths = {
		"clean": [path.join(base.dest, dirs.sass)],
		"dest": {
			"root": base.dest,
			"css": path.join(base.dest, dirs.css),
			"html": path.join(base.dest)
		},
		"src": {
			"root": base.src,
			"sass": path.join(base.src, dirs.sass),
			"jekyll": path.join(base.src, dirs.jekyll),
		},
		"tasks": path.join(dirs.tasks)
	};

	return paths;
}

module.exports = getPaths;
