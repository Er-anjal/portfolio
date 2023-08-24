
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
    // Initialize an empty string to store the HTML content
var clutter = "";
// Loop from 1 to 30 (inclusive)
for (var i = 1; i <= 133; i++) {
    // Append a <div> element with class "bubble" and containing the text "5"
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    
}
// Set the inner HTML of an element with the id "pbtm" to the generated clutter
document.querySelector("#pbtm").innerHTML = clutter;

}
function runTimer(){
    var timerint = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Score ${score}</h1>`;
            document.querySelector("#hitVal").textContent = 0;
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