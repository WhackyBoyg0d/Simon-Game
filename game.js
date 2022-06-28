var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];


function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);

}

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass("pressed").dequeue().delay(100).queue(function () {
        $(this).removeClass("pressed");
});
}

$(".btn").click(function() {
    animatePress(this.id);
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(this.id);
})

$(document).one("keydown",function(){
    var level = 0;
    $("h1").text("Level "+level);
    nextSequence();

})


var started = false;
var level = 0;

$(document).keydown(function() {
    if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
}
});








