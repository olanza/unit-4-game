var randomNum = 10 + Math.floor(Math.random() * 100);

$("#numGuess").text(randomNum); 

var crystal1 = 1 + Math.floor(Math.random() * 10); 
var crystal2 = 1 + Math.floor(Math.random() * 10); 
var crystal3 = 1 + Math.floor(Math.random() * 10); 
var crystal4 = 1 + Math.floor(Math.random() * 10); 

var userTotal = 0; 
var wins = 0; 
var losses = 0;
$("#totalNum").text(userTotal);
$("#wins").text(wins);
$("#losses").text(losses);

var reset = function() { 
    userTotal = 0;
    randomNum = 10 + Math.floor(Math.random() * 100);
    crystal1 = 1 + Math.floor(Math.random() * 10);
    crystal2 = 1 + Math.floor(Math.random() * 10);
    crystal3 = 1 + Math.floor(Math.random() * 10);
    crystal4 = 1 + Math.floor(Math.random() * 10);
    
    $("#numGuess").text(randomNum);
    $("#totalNum").text(userTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("Great Job!");
        $("#wins").text(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("Try Again, LOSER!");
        $("#losses").text(losses);
        reset();
    }
};

$("#crystal1").on("click", function() {
    userTotal += crystal1;
    $("#totalNum").text(userTotal);
    winCheck();
})

$("#crystal2").on("click", function() {
    userTotal += crystal2;
    $("#totalNum").text(userTotal);
    winCheck();
})

$("#crystal3").on("click", function() {
    userTotal += crystal3;
    $("#totalNum").text(userTotal);
    winCheck();
})

$("#crystal4").on("click", function() {
    userTotal += crystal4;
    $("#totalNum").text(userTotal);
    winCheck();
})



