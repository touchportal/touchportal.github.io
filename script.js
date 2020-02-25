$(document).ready(function(){
    $(".notes").hover(
    function(){
        $("#header-mount").css("background", "url('../img/header-notes.png') fixed top center");
        $("#header-mount").css("background-size", "contain");
    },
    function(){
        $("#header-mount").css("background", "url('../img/header-default.png') fixed top center");
    });
    
    $(".writing").hover(
    function(){
        $("#header-mount").css("background", "url('../img/header-writing.png') fixed top center");
        $("#header-mount").css("background-size", "contain");
    },
    function(){
        $("#header-mount").css("background", "url('../img/header-default.png') fixed top center");
    });
    
    $(".images").hover(
    function(){
        $("#header-mount").css("background", "url('../img/header-images.png') fixed top center");
        $("#header-mount").css("background-size", "contain");
    },
    function(){
        $("#header-mount").css("background", "url('../img/header-default.png') fixed top center");
    });
    
    $(".others").hover(
    function(){
        $("#header-mount").css("background", "url('../img/header-others.png') fixed top center");
        $("#header-mount").css("background-size", "contain");
    },
    function(){
        $("#header-mount").css("background", "url('../img/header-default.png') fixed top center");
    });
    
    $.getJSON( "content/post-12-01-2020.json", function( handler ) {
        $("#json-handler-date").html(handler["date"]);
        $("#json-handler-title").html(handler["title"]);
        $("#json-handler-text").html(handler["text"]);
    });
});

























