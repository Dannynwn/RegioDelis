
$(document).ready(function () {
    $(".active, .space, .Reg, .Ses").mouseover(function () {
        var audio = new Audio("../media/effect-btn.mp3");
        audio.play();
    });
});
