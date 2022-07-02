var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];


function nextSequence () {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4 );
    
    var randomChosenColour = buttonColours[randomNumber];
    animatePress(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
    console.log(userClickedPattern);
    console.log(gamePattern);

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

function checkAnswer(currentLevel) {
    var result = true;
    for(var i = 0; i<level; i++) {
        if(userClickedPattern[i]!=gamePattern[i]){
            result = false;
            console.log("nay");
        }
        else{
            console.log("yay");
        }
    }
    return result;
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];

}

$(".btn").click(function() {
    animatePress(this.id);
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(this.id);
    if(gamePattern.length==userClickedPattern.length){
        if(checkAnswer(level)==true){
            console.log("Success");
            setTimeout(function () {
            nextSequence();
            }, 1000);
            userClickedPattern=[];
        }
    else{
        playSound("wrong");
        $("body").addClass("game-over").dequeue().delay(200).queue(function () {
        $(this).removeClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
});
    }
    }
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










