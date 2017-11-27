const http = require('http');
const bl = require('bl');

var url = process.argv[2];

function getHttp(url){
    http.get(url, function(response){
        response.pipe(bl(function(error, data){
            if(error){
                return console.error(error);
            }else{
                var res = data.toString();
                console.log(res.length);
                console.log(res);
            }
        }))
    });
}

getHttp(url);

