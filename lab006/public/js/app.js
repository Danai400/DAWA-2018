$(document).ready(function(){
    var socket = io();
    $('#formulario').submit(function(e){
        e.preventDefault();
        var data = {
            _id : $('#_id').val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            timezone: $('#timezone').val(),
            locale: $('#locale').val(),
            profile_pic: $('#profile_pic').val()
        };
        if(data._id == ''){
            $('#_id').focus();
            return alert('Debe ingresar un ID!');
        }
        if(data.first_name == ''){
            $('#_first_name').focus();
            return alert('Debe ingresar un nombre!');
        }
        socket.emit('crear', data);
        $('#formulario').trigger('reset');
        
        //socket.on('nuevo', (data) => {
          //  console.log('correcto')
            //fill(data)
        //})
        
        return true
    });
});

/*var fill = (data) => {
    var $row = $('<tr id= "'+data._id+'">')
    $row.append('<td>'+data._id+'</td>')
    $row.append('<td>'+data.first_name+'</td>')
    $row.append('<td>'+data.last_name+'</td>')
    $row.append('<td>'+data.timezone+'</td>')
    $row.append('<td>'+data.locale+'</td>')
    $row.append('<td>'+data.profile_pic+'</td>')
    $row.append('<td><button class="btn btn-warning btn-sm" name="btnAct">Editar</button></td>')
    $row.append('<td><button class="btn btn-danger btn-sm" name="btnAct">Eliminar</button></td>')
    $row.data('data',data)
    $('table tbody').append($row)
}*/