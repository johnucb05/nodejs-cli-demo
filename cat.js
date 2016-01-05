#!/usr/bin/env node

var fs = require('fs');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
/*async (function() {
var data = await (fs.promise.readFile("./cat.js", "utf8"));
//fs.readFile(process.argv[2], function (err, data) {
console.log(data)
})();*/
fs.readFile(process.argv[2],'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
