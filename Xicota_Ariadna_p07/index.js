var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var marcador{
	A: 0;
	B: 0;
};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(marcador){
    io.emit('chat message', marcador);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
