#!/usr/bin/env node

var fs = require('fs');
var myCallback = function (err, data) {
  if (err) process.stdout.write(err);

};
//var fd = fs.open(process.argv[2],'r+', myCallback);
var fd = fs.openSync(process.argv[2],'r');
fs.futimes(fd, new Date(), new Date(),myCallback);
//fs.closeSync(fd);
