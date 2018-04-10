var http = require('http'),// http servidor que escucha
	fs = require('fs');

var parametros = [],
valores = [];

http.createServer(function(req,res){//req , representa a la solicitud del cliente
	fs.readFile('./form.html',function(err,html){ //readFile, lee los archivos de form.html
		var html_string = html.toString();



		if(req.url.indexOf('?')>0){
			var url_data = req.url.split('?');//
			arreglo_parametros = url_data[1].split('&');


		for(var i=0; i < arreglo_parametros.length; i++){
			var parametro = arreglo_parametros[i];
			var param_data = parametro.split('=');
			parametros[i] = param_data[0];
			valores[i] = param_data[1];

	
}}

		for(var i=0; i<parametros.length; i++){
			html_string = html_string.replace('{'+parametros[i]+'}',valores[i]);
		}

		console.log(arreglo_parametros)//nombre=yoha
		console.log(parametros)//nombre
		console.log(valores)//yoha


		res.writeHead(200,{'Content-type':'text/html'});//para que la rpta del servidor se muestre como html, que incluya un encabezado con el tipo de contenido correcto
		res.write(html_string);
		res.end();
	});


}).listen(8081);

