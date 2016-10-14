var http = require('http');
var url = require('url');

var port = process.argv[2];
var res;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'})

  var obj = url.parse(request.url, true);
  var time = new Date(obj.query.iso);
  var str = obj.pathname.toString();

  if(str.includes('parsetime'))
    res = ISOtime(time);
  else if(str.includes('unixtime'))
    res = Utime(time);

  response.end(JSON.stringify(res));

})

function ISOtime(time) {
  return {hour:time.getHours(), minute: time.getMinutes(), second: time.getSeconds()}
}

function Utime(time) {
  return {unixtime: time.getTime()}
}

server.listen(port)
