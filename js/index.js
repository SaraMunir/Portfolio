$(document).ready(function(){
    // $(window).scroll(function() {
    // var scroll = $(window).scrollTop();
    // $(".hero").css({
    //     transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
    // });
    // });
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
//=================FOR H1 ANIMATION
function heroAnimation(){
    
        // $(".heroText2").fadeIn('slow');
        $(".heroText2").animate({
            left: '50%',
        }, 2500);
        // $(".heroText1").fadeIn('slow');
        $(".heroText1").animate({
            right: '50%',
            // fontSize: '73px'
        }, 2500);
        return;
    }
    setTimeout(heroAnimation, 500);
    // heroAnimation();

    $("h1").mouseenter(function(){
        // $(".heroText1").css("background-color", "yellow");
        $(".heroText1").animate({
            right: '60%',
        }, 1000);
        $(".heroText2").animate({
            left: '60%',
        }, 1000);
    });
    $("h1").mouseleave(function(){
        $(".heroText1").animate({
            right: '50%',
        }, 1000);
        $(".heroText2").animate({
            left: '50%',
        }, 1000);
    });
    //========dont delete below
    });