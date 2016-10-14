var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function (error, list) {
  if(error){
    return console.error('Hubo un error: ', error);
  }
  for(var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
});
