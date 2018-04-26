var express = require('express'),
app = express(),
user = require('./models/user')
http = require('http').Server(app)
io = require('socket.io')(http),
port = process.env.PORT || 3000;
//	puerto del equipo ya configurado

app.set('view engine', 'jade');

app.use('/static', express.static('public'));

app.get('/', function(req, res){
	res.render('main');
});

io.on('connection', function(socket){
	user.show(function(data){
		io.emit('listar', data);
	});
	socket.on('crear', function(data){
		user.create(data, function(rpta){
			io.emit('nuevo', rpta);
		});
		//console.log(data);
	});
	socket.on('actualizar', function(data){
		user.update(data, function(rpta){
			io.emit('nuevo', rpta);
		});
	});
	console.log('Usuario conectado');
	socket.on('disconnect', function(){
		console.log('Usuario desconectado');
	});
});

http.listen(port, function(){
	console.log('Servidor conectado en *:'+port);
});