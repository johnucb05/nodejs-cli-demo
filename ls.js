#!/usr/bin/env node

var fs = require('fs');
var tempParent = "";
var statCallback = function(tempdata, tempParent) { 
 return function(err,stats){
    if(err){
        process.stdout.write(err.toString());
    } else if (stats) {
        //process.stdout.write("start once");
        //process.stdout.write("stats: " + stats.toString());
        //process.stdout.write("\nprocess.argv: " + process.argv[2]);
        var isDirectory = stats.isDirectory();
        if(isDirectory) {
		if(recursive) {
                	readDir("."+tempParent+"/"+tempdata,
                        	tempParent+"/"+tempdata );
		}
        } else {
		process.stdout.write((tempParent.length > 1? tempParent.substring(1) + "/"  : "" )+tempdata+"\n");
        }
    }
 };
};

var callbackFactory = function(parentDir) {
    return function (err, data) {
  	if (err) process.stdout.write(err);
	else {
		//process.stdout.write("current parent: " + parentDir + "\n");
		for(var i = 0; i < data.length; ++i) {
			//process.stdout.write("maindir: ."+parentDir+"/"+data[i] + " || ");
                        //process.stdout.write(parentDir+"/"+data[i]+"\n");
			fs.stat("."+parentDir+"/"+data[i], statCallback(data[i],parentDir));
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
