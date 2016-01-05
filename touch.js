#!/usr/bin/env node

var fs = require('fs');
var myCallback = function (err, data) {
  if (err) process.stdout.write(err);

};
//var fd = fs.open(process.argv[2],'r+', myCallback);
var fd = fs.open(process.argv[2],'r', function(err, fd) {
	if(err) throw err;
	else {
		fs.futimes(fd, new Date(), new Date(),myCallback);
	}
});
//fs.futimes(fd, new Date(), new Date(),myCallback);
//fs.closeSync(fd);
