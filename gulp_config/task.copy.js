/* jshint node: true */
'use strict';

function getTaskConfig(config) {
	var path = require('path');

	var taskConfig = {
		items: [path.join(config.paths.src.fonts, '**/*.*')]
	};

	return taskConfig;
}

module.exports = getTaskConfig;
