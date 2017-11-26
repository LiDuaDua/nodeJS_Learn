var fs = require('fs');
var pt = require('path');

module.exports = function(folder, ext, callback){
    fs.readdir(folder, function(error, list){
        if(error){
            callback(error);
        }else{
            ext = '.' + ext;
            var reslist = [];
            for(var i = 0; i < list.length; i ++){
                if(pt.extname(list[i]) === ext){
                    reslist.push(list[i]);
                }
            }

            callback(null, reslist);
        }
    });
}