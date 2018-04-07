/* jshint node: true */
'use strict';

function getTaskConfig(config) {
	var path = require('path');

	var taskConfig = {
		items: [path.join(config.paths.src.fonts, '**/*.*'), path.join(config.paths.src.images, '**/*.*')]
	};

	return taskConfig;
}

module.exports = getTaskConfig;
