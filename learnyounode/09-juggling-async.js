var http = require('http');
var http2 = require('http');
var http3 = require('http');

var data1 = '';
var data2 = '';
var data3 = '';

var count = 0;

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on("data", function (word) {
    data1 += word;
  }).end;
  response.on('end', function(){
    console.log(data1);
    while(count == 2){
      console.log(data2);
      count++;
    }
    while(count == 3){
      console.log(data3);
      count++
    }
  })
  response.on("error", console.error);
}).on('error', console.error);

http2.get(process.argv[3], function(response) {
  response.setEncoding('utf8');
  response.on("data", function (word) {
    data2 += word;
  }).end;
  response.on('end', function(){
    count = 2;
  })
  response.on("error", console.error);
}).on('error', console.error);

http3.get(process.argv[4], function(response) {
  response.setEncoding('utf8');
  response.on("data", function (word) {
    data3 += word;
  }).end;
  response.on('end', function(){
    count = 3;
  })
  response.on("error", console.error);
}).on('error', console.error);
