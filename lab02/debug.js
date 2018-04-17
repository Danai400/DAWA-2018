var fs = require('fs');

fs.readFile('lorem.txt', 'utf8', funtion(err,data){

debugger;

if(err)
	throw err;

console.log(data);
});