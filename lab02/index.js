var express = require('express')
var app = express()

app.get('/', function(req,res){
	res.send('HOLA MUNDO ! en express :)')

})
app.post('/',function(req,res){
	res.send('llamada POST misma URL')
})
app.put('/user',function(req,res){
	res.send('Recibimos un put en /user')
})
app.delete('/user',function(rep,res){
	res.send('recibimos un Delete en /user')
})

app.listen(3000, function(){
	consola.log('app de ejm escuchando en el puerto 3000!')
});