'use strict';

function getPaths(config) {
  var path = require('path');

  var dirs = {
    "css": "styles",
    "dest": "public",
    "fonts": "fonts",
    "jekyll": "jekyll",
    "root": "./",
    "sass": "sass",
    "scripts": "scripts",
    "src": "source",
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
      "fonts": path.join(base.dest, dirs.fonts),
      "html": path.join(base.dest),
      "scripts": path.join(base.dest, dirs.scripts)
    },
    "src": {
      "root": base.src,
      "fonts": path.join(base.src, dirs.fonts),
      "jekyll": path.join(base.src, dirs.jekyll),
      "sass": path.join(base.src, dirs.sass),
      "scripts": path.join(base.src, dirs.scripts)
    },
    "tasks": path.join(dirs.tasks)
  };

  return paths;
}

module.exports = getPaths;
