var mm = require('./mymodule.js');

var folder = process.argv[2];
var ext = process.argv[3];

mm(folder, ext, function(error, list){
    if(error){
        return console.error(error);
    }else{
        for(var i = 0; i < list.length; i ++){
            console.log(list[i]);
        }
    }
});