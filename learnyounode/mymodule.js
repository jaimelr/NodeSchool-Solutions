
var fs = require('fs');
var path = require('path');

module.exports = function(pathF, ext, callback) {

  var ext1 = '.' + ext;

  fs.readdir(pathF, function(err, list) {
    if(err)  {
      return callback(err);
    }
    else {
      var i;
      var j;
      var data = [];
      for(i = 0, j = 0; i < list.length; i++) {
        if(ext1 == path.extname(list[i])){
          data[j] = list[i];
          j++;
        }
      }
    }
    return callback(null, data);
  });
};
