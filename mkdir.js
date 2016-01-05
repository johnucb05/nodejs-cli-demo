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

fs.mkdir(process.argv[2],myCallback);
