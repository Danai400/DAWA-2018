

     (function () {
        function MusicBox() {
            return{
                box : [],
                addAlbum : function (album) {
                    this.box.push(album)
                },
                favoriteAlbum: function () {
                    return this.box[0].nombre +' - '+ this.box[0].artista
                }
                }
        }
        function Album(nombre,artista) {
            return{
                    nombre: nombre,
                    artista : artista,
                    play : function () {
                        console.log(`Tocando ${this.nombre} de ${this.artista}`)
                    }
                 }
        }
        var box = MusicBox(),
        a1 = Album('The who', 'Tommy'),
        a2 = Album('Tom Waits', 'Closing Time'),
        a3 = Album('Jhon Cale', 'Paris 1919'),
        favorito;

        box.addAlbum(a1);
        box.addAlbum(a2);
        box.addAlbum(a3);

        a1.play();
        a2.play();
        a3.play();

        favorito = box.favoriteAlbum();
        console.log(`Tu álbum favorito es ${favorito}`)
    }() );







/*(function () {
       function Sumar() {
        return {
                valor : 0,
                agregar : function (val) {this.valor += val},
                obtenerSumaActual: function () {return this.valor}
                }
        }
       
        var s1 = Sumar() 
        var s2 = Sumar()
        
        s1.agregar(10)
        s1.agregar(20)

        s2.agregar(30)
        s2.agregar(5)
        console.log(s1.obtenerSumaActual());
        console.log(s2.obtenerSumaActual());
    }()); 


//----------------------


            var album_favorito = function (coleccion) {
                if (coleccion.length === 0) {
                	return;
                }
                   
                var mas_reproducido = coleccion[0].tocado,
                    mas_indice = 0;
                
                for (var i = 0, len = coleccion.length; i < len ; i++) {
                    if(coleccion[i].tocado > mas_reproducido){
                        mas_reproducido = coleccion[i].tocado;
                        mas_indice = i;
                    }
                }
                return{
                    play: mas_reproducido,
                    index : mas_indice};
            };

            var music = [
               {cancion: 'paloma mensajera', tocado: 9},             
               {cancion: 'lura de amor', tocado: 90},         
                  
            ]
            var fav = album_favorito(music);
            console.log(`Tu album favorito fue tocado ${fav.play} veces`);
        }());
        





	var mayor = function(o1, o2) {
		if (o1.tamano > o2.tamano) {
			console.log('o1 es mayor');

		}else {
			console.log('o2 es mayor');
		}
	};
	var x = {tamano : 6}
	var y = {tamano : 3}

	mayor(x, y);
}());*/