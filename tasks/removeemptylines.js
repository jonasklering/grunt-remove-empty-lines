/*
 * grunt-remove-empty-lines
 * https://github.com/jonasklering/grunt-remove-empty-lines
 *
 * Copyright (c) 2014 jonasklering
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('removeemptylines', 'Very simple and lightweight cleaner that just removes empty lines from specific parts of any kind of files', function () {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			regex: /(?:[ |\t]*<!--\(\s?remove-empty-lines-start\s?\)-->)\n?([\s\S]+?)(?:[ |\t]*<!--\(\s?remove-empty-lines-end\s?\)-->)/g
		});

		// Iterate over all specified file groups.
		this.files.forEach(function (f) {
			// Concat specified files.
			var src = f.src.filter(function (filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function (filepath) {
				// Read file source.
				return grunt.file.read(filepath);
			}).join(grunt.util.linefeed);

			src = src.replace(options.regex, function(match, attributes) {
				// Remove Empty Lines
				return attributes.replace(/^\s*\n/gm, "").replace(/\s+$/,"");
			});

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};