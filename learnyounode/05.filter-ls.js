var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
  if(err)  {
    console.log(err);
  }
  else {
    for(var i = 0; i < list.length; i++) {
      if(ext == path.extname(list[i])){
        console.log(list[i]);
      }
    }
  }
});
