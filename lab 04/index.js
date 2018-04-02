var express = require('express')
var app = express()

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static',express.static('public'))

app.use(function(req, res, next){
	res.status(404).send("Eso no existe")

})

app.use(function(err,req, res, next){
	console.error(err.stack)
	res.status(500).send('Algo salio mal !')
})

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
	console.log('app de ejm escuchando en el puerto 3000!')
});