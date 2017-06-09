/*-----------------------*GLoabal Variable Declaration*----------------*/
var score, Hscore;
var num;
var count = 0;
var gameEnd = false;
var widthT;
var heightT;
var timerVal;

window.onload = function(){
    document.body.style.height = window.innerHeight+"px";
    score = 0;
    Hscore = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("hscore").innerHTML = Hscore;
    widthT = document.getElementsByTagName("table")[0].offsetWidth;
    heightT = document.getElementsByTagName("table")[0].offsetHeight;
    document.getElementById("gameStopper").style.width = widthT + "px";
    document.getElementById("gameStopper").style.height = heightT + "px";
    centralizeStartButton();
    document.getElementById("gameOver").style.display = "none";
    localStorage.setItem("bestScore",9999999);
    //alert(localStorage.getItem("bestScore"));
}

var centralizeStartButton = function(){
    document.getElementById("startButton").style.marginTop = ((heightT - document.getElementById("startButton").offsetHeight)/2) + "px";
    document.getElementById("startButton").style.marginLeft = ((widthT - document.getElementById("startButton").offsetWidth)/2) + "px";
}

var begin = function(){
    count++;
        document.getElementById("gameStopper").style.display = "none";
        //Selecting a random cell
        var varNum = Math.random();
        num = varNum*10;
        if(num <= 1)
            num = 1;
        else if(num>=9)
            num = 9;
        num = Math.floor(num*16/9); //to get a number between 1 to 16 --linearization technique
        document.getElementById(num).style.background = "rgba(45,55,66,0.75)";
        timerVal = Date.now();
        
        if(count>10){
            resetAll();
            document.getElementById("gameStopper").style.display = "block";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("startButton").innerHTML = "Try Again";
            centralizeStartButton();
            
            Hscore = localStorage.getItem("bestScore");
            console.log(Hscore);
            if(score<Hscore)
                localStorage.setItem("bestScore",score);
            document.getElementById("hscore").innerHTML = localStorage.getItem("bestScore");
            count = 0;
            score = 0;
        }
}

var play = function(arg){
    if(arg==num){
        var diff;
        var diff = Date.now() - timerVal;
        score = score+diff;
        document.getElementById("score").innerHTML = score;
    }
    else{
        count = 10;
        score = 9999999;
        document.getElementById("score").innerHTML = "0";
        alert("Ops!\nThat was Wrong")
    }
    
    //Reset color of each cell
        resetAll();
        begin();
}
var resetAll = function(){
    for(i=1;i<=16;i++)
            document.getElementById(i).style.background = "rgba(12,15,180,0.3)";
}