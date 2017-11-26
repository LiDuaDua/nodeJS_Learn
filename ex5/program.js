var fs = require('fs');
var pt = require('path');

var path = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(path, function(error, list){
    if(error){
        console.log('error happened!');
    }else{
        for(var i = 0; i < list.length; i ++){
            if(pt.extname(list[i]) === ext){
                console.log(list[i]);
            }
        }
    }
});