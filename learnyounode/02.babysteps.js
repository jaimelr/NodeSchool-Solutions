var length = process.argv.length;
var result = 0;

for(var i=2; i < length; i++){
	result += Number(process.argv[i]);
}

console.log(result);
