var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];

function nextSequence (buttonColours, gamePattern) {
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}