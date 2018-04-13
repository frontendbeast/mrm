'use strict';

function getTaskConfig(config) {

	var taskConfig = {
    babel: {
      presets: ['env']
    }
	};

	return taskConfig;
}

module.exports = getTaskConfig;
