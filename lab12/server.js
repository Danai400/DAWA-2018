const express 	= require('express');
const app 		= express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use("/", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Authorizarion, Content-length, X-Requested-With');
	next();
});

app.options("*", function(req, res, next){
	res.sendStatus(200);

});
const router = express.Router();
router.get('', function(req, res){
	res.json({message: 'genial! bienvenido a nuestra api!' });
});

app.use('/api', router);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise = global.Promise;

app.listen(port);
console.log('La magia sucede en el puerto' + port);