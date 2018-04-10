var http = require('http');
var express = require('express');
var app = express();
fs = require('fs');

//var html = fs.readFileSync('./index.html');


app.get('/',function(solicitud,respuesta){
	fs.readFile('./index.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.get('/nosotros.html',function(solicitud,respuesta){
	fs.readFile('./nosotros.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.get('/contactenos.html',function(solicitud,respuesta){
	fs.readFile('./contactenos.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.get('/contactenos.html',function(solicitud,respuesta){
	fs.readFile('./contactenos.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.get('/NuestrosServicios.html',function(solicitud,respuesta){
	fs.readFile('./NuestrosServicios.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.get('/CatalogoClientes.html',function(solicitud,respuesta){
	fs.readFile('./CatalogoClientes.html', function(error, html){
		respuesta.write(html);
		respuesta.end();
	});
	});
app.listen(8081, function(){
		//console.log('Servicio iniciado');
});