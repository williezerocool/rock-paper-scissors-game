/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function randomNum(min, max){
   
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
    
    
function randomPick(){
    
    var a = randomNum(1, 4);
    
    if(a === 1){
        return "rock";
    }else if(a === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

var userScore = 0;
var cpuScore = 0;
	
function getWinner(){
    

    var user = document.getElementsByName("user")[0].value;
    var cpu = randomPick();
    
 
    if(user === "rock" && cpu === "paper"){
        cpuScore++;
        return document.getElementById("myP").innerHTML = "The cpu picked paper, paper wins!"; 
    }
    else if(user === "rock" && cpu === "scissors"){
        userScore++;
        return document.getElementById("myP").innerHTML = "The cpu picked scissors, you win!";
    }
    else if(user === "rock" && cpu === "rock"){
        return document.getElementById("myP").innerHTML = "You have a tie, play again!";
    }
    else if(user === "paper" && cpu === "rock"){
        userScore++;
        return document.getElementById("myP").innerHTML = "The cpu picked rock, you win!";
    }
    else if(user === "paper" && cpu === "scissors"){
        cpuScore++;
        return document.getElementById("myP").innerHTML = "The cpu picked scissors, scissors win!";
    }
    else if(user === "paper" && cpu === "paper"){
         return document.getElementById("myP").innerHTML = "You have a tie, play again!";
    }
    else if(user === "scissors" && cpu === "rock"){
        cpuScore++;
        return document.getElementById("myP").innerHTML = "The cpu picked rock, rock wins!";
    }
    else if(user === "scissors" && cpu === "scissors"){
        return document.getElementById("myP").innerHTML = "You have a tie, play again!";
        
    }
    else if(user === "scissors" && cpu === "paper"){
         userScore++;
         return document.getElementById("myP").innerHTML = "The cpu picked paper, you win!";
    }
    else if (user === "lava"){
        userScore++;
        return document.getElementById("myP").innerHTML = "Nothing beats lava! It will destroy everything, you win!!!!!";
    }
    else{
        
        return document.getElementById("myP").innerHTML = "You have to pick rock, paper, scissors or try and guess the secret cheat!";
    }
    
    
  
}

function addScore(){
    
    var userCount = parseInt(document.getElementById("userCount").innerHTML);
    var cpuCount = parseInt(document.getElementById("cpuCount").innerHTML);
    
    if( userScore === 1){
        document.getElementById("userCount").innerHTML =  userCount + userScore;
        userScore = 0;
    }else if(cpuScore === 1){
        document.getElementById("cpuCount").innerHTML = cpuCount + cpuScore;
        cpuScore = 0;
    } else{
        return false;
    }
}
