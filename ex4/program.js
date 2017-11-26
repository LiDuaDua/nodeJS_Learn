var fs = require('fs');


var path = process.argv[2];

fs.readFile(path, 'utf8', function(error, data){
    if(error){
        console.log('error happened!');
    }else{
        var lineList = data.toString().split('\n');
        console.log(lineList.length - 1);
    }
});