$( document ).ready(function() {
    console.log( "ready!" );
    // alert("ready")

    function onSubmit() {
        console.log("bbbbbb");
        var s = $("#search").val()
        $(".inner-form").fadeOut()
        $(".info").fadeOut()
        $(".notchatbot").append("<div class = \"roundMess\">" + speak(s) + "</div>")
    }

    $(".btn-search").on( "click", onSubmit);
    $( "#search" ).keypress(function( event ) {
        console.log("aaabbb")
        if ( event.which == 13 ) {
            event.preventDefault();
            onSubmit()
        }
    })

});
