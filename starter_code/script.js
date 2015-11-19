var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    
var cars = ["rock", "paper", "scissors"];
var ousman = Math.floor(Math.random()*3);
return cars[ousman];

};

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if( userValue == aiValue ){
        return "draw";
    } else if (aiValue == "paper" && userValue == "rock" ){
        return "ai";
    } else if (aiValue == "rock" && userValue == "scissors"){
        return "ai";
    } else if(aiValue == "scissors" && userValue == "paper"){
        return "ai";
    } else{
        return "user";
    }
    
};
    //TODO: Add one point for the winner
// This function sets the scoreboard with the correct points
function setScore() {
    $("#userPoint").text(userPoint);
    $("#aiPoint").text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again'); 
        userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
        aiPoint++;
    }
    setScore();
}

// This function runs on page load
$(document).ready(function(){
   $(".token").click(function(evt){
       evaluate(evt);
   });
    
});
