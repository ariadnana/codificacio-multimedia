var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

var marcador = {
	A:0,
	B:0	
};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('golA', function(){
        marcador.A+=1;
        io.emit('dibuixarmarcador', marcador);
    });
    socket.on('golB', function(){
        marcador.B+=1;
        io.emit('dibuixarmarcador', marcador);
});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
