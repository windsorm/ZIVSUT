$( document ).ready(function() {
    console.log( "ready!" );
    // alert("ready")


    $(".btn-search").on( "click", function() {
        console.log( $( this ).text() );
        alert("hledame: " + $("#search").val())
    });


});
