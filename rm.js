#!/usr/bin/env node

var fs = require('fs');
var myCallback = function(err){
    if(!err){
        //do nothing
    } else {
        //debug
        console.log(err);
    }
};

if(fs.statSync(process.argv[2]).isDirectory()) {
	fs.rmdir(process.argv[2],myCallback);
} else {
	fs.unlink(process.argv[2],myCallback);
}
