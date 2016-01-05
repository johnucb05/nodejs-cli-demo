#!/usr/bin/env node

var fs = require('fs');
var myCallback = function(err,stats){
    if(err){	
	process.stdout.write(err.toString());
    } else if (stats) {
	//process.stdout.write("start once");
	//process.stdout.write("stats: " + stats.toString());
	//process.stdout.write("\nprocess.argv: " + process.argv[2]);
	var isDirectory = stats.isDirectory();
	if(isDirectory) {
        	fs.rmdir(process.argv[2],myCallback);
	} else {
        	fs.unlink(process.argv[2],myCallback);
	}
    }
};

fs.stat(process.argv[2], myCallback);
