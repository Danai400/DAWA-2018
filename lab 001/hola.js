var http = require('http');

var manejador = function(solicitud, respuesta){
	console.log('Conexion Entrante');
	respuesta.end('Hola mundo !');

};
var servidor = http.createServer(manejador);

servidor.listen(8081);