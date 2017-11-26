var args = process.argv.slice(2);
var res = 0;

for(var i = 0; i < args.length; i ++){  
    res += parseInt(args[i]);
}
console.log(res);
