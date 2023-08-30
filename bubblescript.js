
var timer = 60;
var score = 0;
var hitrn ;

document.querySelector("#pbtm").addEventListener("click",function(dets)
{
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn)
    {
        increaseScore();
        getNewHit();
        makeBubble();
    }
    else{
        decreaseScore();
        getNewHit();
        makeBubble();
    }
});

function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
var clutter = "";
if(`@media (min-width: 450px)`){
    for (var i = 1; i <= 40; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;   
    }
    }else{
        for (var i = 1; i <= 133; i++) {
            clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;   
        }
    }
document.querySelector("#pbtm").innerHTML = clutter;

}
function runTimer(){
    var timerint = setInterval(function () {
        if(timer >= 1){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Score ${score}</h1>`;
            document.querySelector("#hitVal").textContent = 0;
            document.querySelector("#pbtm").style.pointerEvents = "none";
        }
    },1000);
}
function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}
function decreaseScore(){
    score -=10;
    document.querySelector("#scoreVal").textContent = score;
    
}
getNewHit();
runTimer();
makeBubble();

