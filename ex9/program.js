const http = require('http');
const bl = require('bl');

var urls = process.argv.slice(2);
var res = [];
var count = 0;

function getHttp(url){
    http.get(url, function(response){
        response.pipe(bl(function(error, data){
            if(error){
                return console.error(error);
            }else{
                res[count] = data.toString();
                if(++ count === 3){
                    printRes(res);
                }
            }
        }))
    });
}

for(var i = 0; i < 3; i ++){
    getHttp(urls[i]);
}

function printRes(res){
    for(var i = 0; i < res.length; i ++){
        console.log(res[i]);
    }
}

