var net = require('net');
var strftime = require('strftime');

var date;

var server = net.createServer(function listener(socket){
  date = strftime('%F %H:%M', new Date()) + '\n';
  socket.write(date);
  socket.end();
})

server.listen(Number(process.argv[2]));
