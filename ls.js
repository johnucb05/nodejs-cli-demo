#!/usr/bin/env node

var fs = require('fs');
var callbackFactory = function(parentDir) {
    return function (err, data) {
  	if (err) process.stdout.write(err);
	else {
		//process.stdout.write("current parent: " + parentDir + "\n");
		for(var i = 0; i < data.length; ++i) {
			//process.stdout.write("maindir: ."+parentDir+"/"+data[i] + " || ");
                        //process.stdout.write(parentDir+"/"+data[i]+"\n");
			if(fs.statSync("."+parentDir+"/"+data[i]).isDirectory()) {
				if(recursive) {
					readDir("."+parentDir+"/"+data[i],
						parentDir+"/"+data[i] );
				}
			} else {
				process.stdout.write((parentDir.length > 1? parentDir.substring(1) + "/"  : "" )+data[i]+"\n");
			}
		}
	}
    };
}
var readDir = function (path,parentDir) {
	if(!parentDir) {
		parentDir = "";
	}
	fs.readdir(path, callbackFactory(parentDir));
}

var recursive = (process.argv[3] == "-R");
var mainDir = process.argv[2] || "./";
readDir(mainDir);
