var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var product_schema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String
})

const Producto = mongoose.model('producto',product_schema,'producto')

module.exports = {
    show: function (req, res) {
        if (req.body._id == null) {
            Producto.find({}, function (err, productos){
              if(err){console.log(err)}
              else{res.render('table',{data : productos})}
            })
        }
        else{
            Producto.find({_id : req.body._id}, function(err, producto){
              if(err){console.log(err)}
              else{res.render('table', {data: producto})}
            }) 
        } 
    },
    storage: function(req, res ) {
        let producto = new Producto()
        producto.nombre = req.body.nombre,
        producto.descripcion = req.body.descripcion,
        producto.precio = req.body.precio
        producto.save(function(err, data){
            Producto.find({}, function(err, productos){
                if(err){console.log(err)}
                else{
                    res.status(200)
                    res.redirect('/productos')
                }
              })
        })   
    },
    edit: function(req, res) {
        let id = req.params._id
        Producto.findById(id, function(err , data) {
            if(err) console.log(err)
            res.render('edit_product', {producto: data})
        })
    },
    update: function(req, res) {
        let id = req.body._id 
        let nuevo = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            precio: req.body.precio
        }
        Producto.findByIdAndUpdate(id, nuevo,function(err, data) {
            if(err){console.log(err)}
            Producto.find({},function (err, productos){
                if(err){console.log(err)}
                else{
                    res.status(200)
                    res.redirect('/productos')}
              })
        })
    },
    delete: function(req, res) {
        Producto.findOne({_id: req.params._id}, function(err, producto){
        producto.remove(function(err) {
        res.send('EL producto se ha eliminado correctamente.')
        })
      })
    }
  
}