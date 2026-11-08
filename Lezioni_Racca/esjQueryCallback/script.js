$("#btnLampadina").on("click",function (){

    $("#lampadina").toggleClass("acceso");
    

})


let btnAccendi=$('#btnAccendi')
let btnSpegni=$('#btnSpegni')

let descrizione=$('#descrizione')
let contenuto=$('#contenuto')

btnSpegni.hide()
btnAccendi.show()
btnAccendi.click(function (){
    lampadina.addClass('accesa')

    lampadina.fadeIn(1000,function (){
        alert('accesa')
        btnSpegni.show()
        btnAccendi.hide()
    })

    let descrizioneCss={
        width:'100%',
        textAlign:'center',
        backgroundColor:'navy',
        cursor:'pointer',
        borderRadius:'10px',
        fontSize:'16px',
        textDecoration:'underline',
        padding:'20px'
    }

    descrizione.css(descrizioneCss)
    contenuto.css({
        width:'600px',
        backgroundColor:'red',
        padding:'5px',
        marginTop:'20px',
        marginLeft:'140px',
        color:'white',
        border:'2px solid blue'
    })

    contenuto.hide();
    descrizione.on('mouseover',function (){
        visualizzaContenuto(contenuto,descrizione)
    })

    descrizione.on('mouseout',function (){
        contenuto.slideUp(1000)

    })
})

function visualizzaContenuto(contenuto,descrizione){
    contenuto.slideDown(1000)
    descrizione.off('mouseover')
}