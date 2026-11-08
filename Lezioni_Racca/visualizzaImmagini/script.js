
let indice=1

$(document).ready(function (){
    $('#btnIndietro,#btnAvanti').css({
        width:'100%',
        height:'100px',
        backgroundColor:'#ccc',
        textAlign:'center',
        borderRadius:'20px',
        fontWeight:'bold',
        cursor:'pointer'
    })

    $('#img').prop('src','img/img1.jpg').css({
        width:'100%',
    })

    $('#btnIndietro').prop('disabled',true)
    $('#btnAvanti').click(function (){
        indice++
        $('#btnIndietro').prop('disabled',true)
        $('#img').fadeOut(500,function (){
        $('#img').prop('src',`img/img${indice}.jpg`).fadeIn(500)
        })
    })  

})