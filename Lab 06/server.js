
var express = require('express'),
 app     = express(),
 http    = require('http').createServer(app),
 io      = require('socket.io')(http),
 port    = process.env.PORT || 3000;
 //user = require('./models/user');

app.set('view engine','jade');

app.use('/static', express.static('public'));

app.get('/', function(req, res){
    res.render('main');
});

http.listen(port, function(){
    console.log('Servidor conectado en *:' + port);

io.on('connection', function(socket){
  console.log('Usuario conectado!');

  socket.on('disconnect', function(){
    console.log('usuario desconectado!');
  });
   socket.on('crear',function(data) {
     console.log(data);
      // user.create(data, (user) => {
        //  io.emit('nuevo', user)
       //})
    });
 });
  });


