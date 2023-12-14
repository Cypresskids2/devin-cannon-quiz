let score = 0;
let pontis = 10; 

function correct(button){
    score+=10; //add 10 to score
    button.style.backgroundColor = "green"
}
function incorrect (button){
    score-=5 //subtract 5 from score 
    button.style.backgroundColor = "red"

}

function calulateScore(button){
    button.innerHTML = "score" + score;
}
