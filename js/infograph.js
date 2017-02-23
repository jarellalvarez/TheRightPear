$(document).ready(function() {


    $("#nextjazz").click(function() {
        $("#jazzfact1").toggle();
    });
    $("#newjazz").click(function() {
        $("#jazzfact2").toggle();
    });
    $("#bands-2").click(function() {
        $("#bands").toggle();
    });
    $("#singer-2").click(function() {
        $("#singer").toggle();
    });
    $("#soundc").hover(function(){
       $("#soundclouddesc").show();
    });
    $("#heart").hover(function(){
       $("#iheartradiodesc").show();
    });
    $("#googlep").hover(function(){
       $("#googleplaydesc").show();
    });
    $("#amazonp").hover(function(){
       $("#primedesc").show();
    });
    $("#applem").hover(function(){
       $("#appledesc").show();
    });
    $("#spotify").hover(function(){
       $("#spotdesc").show();
    });
    $("#pandora").hover(function(){
       $("#pandesc").show();
    });


var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
var music3 = document.getElementById("music3");
var music4 = document.getElementById("music4");
var player = document.getElementById("player");

var aud_arry = [
    "music/jazz.mp3",
    "music/swing.mp3",
    "music/orking.mp3",
    "music/queen.mp3"
];

music1.onclick = function() {
    player.src = aud_arry[0];
    player.play();
};

music2.onclick = function() {
    player.src = aud_arry[1];
    player.play();
};
music3.onclick = function() {
    player.src = aud_arry[2];
    player.play();
};
music4.onclick = function() {
    player.src = aud_arry[3];
    player.play();
};

});
