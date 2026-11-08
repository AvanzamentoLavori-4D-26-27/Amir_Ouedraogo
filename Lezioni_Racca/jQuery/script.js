'use strict';

$(document).ready(function () {

    $(".pulsanti button").on("mouseenter",(e)=>{
        console.log("mouse entrato su button")
      //  $(e.target).fadeIn()
       // $(e.target).slideUp();
        
    })
 
    let esitosel = $("#esitoSelettori");

    $("#btnSeleziona").on("click", function () {
        $("#listaFrutta li").removeClass("selezionato").first().addClass("selezionato");
        $.ajax({
            type: "method",
            url: "url",
            data: "data",
            dataType: "dataType",
            success: function (response) {
            
            }
        });
        esitosel.text("Hai selezionato la mela.");
        
    });
    
    $("#btnTutti").on("click", function () {
        $("#listaFrutta li").addClass("selezionato");
        esitosel.text("Hai selezionato tutti gli elementi.");
    });

    $("#btnReset").on("click", function () {
        $("#listaFrutta li").removeClass("selezionato");
        esitosel.text("Selezione azzerata.");
    });


    // ESEMPIO 2: EVENTI
    $("#boxEventi").on("click", function () {
        $("#messaggioEventi").text("Hai cliccato sul riquadro!");
    });

    $("#boxEventi").on("mouseenter", function () {
        $(this).addClass("hover");
        $("#messaggioEventi").text("Il mouse è entrato nel riquadro.");
    });

    $("#boxEventi").on("mouseleave", function () {
        $(this).removeClass("hover");
        $("#messaggioEventi").text("Il mouse è uscito dal riquadro.");
    });


    // ESEMPIO 3: CSS E CLASSI
    $("#btnEvidenzia").on("click", function () {
        $("#testoCss").toggleClass("evidenziato");
    });

    $("#btnColore").on("click", function () {
        $("#testoCss").css("color", "red");
    });

    $("#btnRipristina").on("click", function () {
        $("#testoCss")
            .css("color", "#333")
            .removeClass("evidenziato");
    });


    // ESEMPIO 4: EFFETTI
    $("#btnNascondi").on("click", function () {
        $("#boxEffetti").hide();
    });

    $("#btnMostra").on("click", function () {
        $("#boxEffetti").show();
    });

    $("#btnDissolvenza").on("click", function () {
        $("#boxEffetti").fadeToggle(800);
    });

    $("#btnSlide").on("click",function (){
        $("#boxEffetti").slideToggle(1800);
    })

    $("btnChain").on("click",function (){
        $("#boxChain").text("Fatto!")
        .addClass("evidenziato")
        .fadeOut(500)
        .fadeIn(500,function (){
             $(this).text("Premi di nuovo").removeClass("evidenziato")
        })
    })

    // ESEMPIO 5: LISTA DINAMICA
    $("#btnAggiungi").on("click", function () {
        let testo = $("#nuovoElemento").val().trim();

        if (testo !== "") {
            $("#listaDinamica").append(
                $("<li>").text(testo)
            );

            $("#nuovoElemento").val("");
        }
    });

    $("#nuovoElemento").on("keydown", function (event) {
        if (event.key === "Enter") {
            $("#btnAggiungi").trigger("click");
        }
    });

    $("#listaDinamica").on("click", "li", function () {
        $(this).remove();
    });


    // ESEMPIO 6: CHAINING
    $("#btnChain").on("click", function () {
        $("#boxChain")
            .stop(true, true)
            .slideUp(500)
            .slideDown(500)
            .css("background-color", "#ffe08a");
    });


    // ESEMPIO 7: MODIFICARE IL TESTO
    $("#btnTesto").on("click", function () {
        $("#testoModificabile").text("Il testo è stato modificato!");
    }); 


    // ESEMPIO 8: CAMBIARE IL COLORE DEI PARAGRAFI
    $("#btn").on("click", function () {
        $("p").css("color", "red");
    });

});