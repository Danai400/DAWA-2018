	var http = require('http'),
	fs = require('fs')
	parser=require('./parser_var.js'),
	p= parser.parse_vars;
	var app = express();
	//datos=parser.batman;
	//fun=parser.bartam;

	http.createServer(function(req,res){
		fs.readFile('./form.html',function(err,html){
			var html_string = html.toString();

			var respuesta = p(req),
			parametros = respuesta['parametros'],
			valores = respuesta['valores'];

			for(var i = 0; i<parametros.length; i++){
				var html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);

				//if(parametros[i]=='fecha'){
				//html_string = html_string.replace('{date}' , datos ['identidad']);	
				}

		//	}
			/*html_string = html_string.replace('{identidad}' , datos ['identidad']);
			html_string = html_string.replace('{poder}' , datos ['poder']);

			date = new Date()
            html_string = html_string.replace('{24hrs}', fun.formatoHora(date)['formato_24']);
            html_string = html_string.replace('{12hrs}', fun.formatoHora(date)['formato_12']);
			*/
			res.writeHead(200,{'Content-type':'text'});
			res.write(html_string);
			res.end();
		});
	
}).listen(8081);

