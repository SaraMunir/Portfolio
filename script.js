$(document).ready(function(){
//=================FOR nav
    $( ".menuBar" ).hide()
    $( "#hider" ).mouseover(function() {
        $( ".menuBar" ).show( 1500 );
        $( "#hider" ).hide( 500 );
        return;
    });
    $( ".menuBarUL" ).mouseleave(function() {
        $( ".menuBar" ).hide( 1500 );
        $( "#hider" ).show( 1500 );
    });
    //========dont delete below
    });