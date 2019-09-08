$( document ).ready(function() {
    console.log( "ready!" );
    // alert("ready")

    function onSubmit() {
        console.log("bbbbbb");
        var s = $("#search").val()
        $("#search").val("")
        $(".info").fadeOut();

        if ($("#search-form").hasClass("first")) {
            $("#search-form").fadeOut()
        }

        var utter = speak(s)
        console.log(s, speak(s), speak)
        if (utter == null) {
            utter = {}
            utter.isFinal = false
            utter.text = "Bohužel nevíme, co odpovědět, zkuste dotaz zadat jinak."
        }

        if (utter.isFinal) {
            $("#search-form").fadeOut()
        }

        $("#conversation-log").append("<div class = \"roundMess round right text-right hidden\">" + s + "</div>")
        $('#conversation-log').find(".roundMess:last").slideDown("slow", function() {

            $("#conversation-log").append("<div class = \"roundMess round left hidden\">" + utter.text + "</div>")
            $('#conversation-log').find(".roundMess:last").slideDown("slow", function() {




                if (utter.isFinal) {
                    $(".btn-success").fadeIn()
                    $(".btn-danger").fadeIn()

                    return;
                }

                if ($("#search-form").hasClass("first")) {
                    $(".btn-search").text("Další")
                    $("#search-form").removeClass("first");

                    $("#search-form").fadeIn()
                    $("#search").focus()
                }


            });
        });
    }

    $(".btn-search").on( "click", onSubmit);
    $( "#search" ).keypress(function( event ) {
        console.log("aaabbb")
        if ( event.which == 13 ) {
            event.preventDefault();
            onSubmit()
        }
    })


    $(".btn-success").on("click", function() {
        $(".btn-success").fadeOut()
        $(".btn-danger").fadeOut()

        $("#conversation-log").append("<div class = \"roundMess round left hidden\">+1</div>")
        $('#conversation-log').find(".roundMess:last").slideDown("slow", function() {

        });
    })

    $(".btn-danger").on("click", function() {
        alert("zkuste to znovu")
        location.reload();
    });

});
