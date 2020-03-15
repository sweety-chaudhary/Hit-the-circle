let circles = document.querySelectorAll(".circle");
let randomSelect;
let count = 0;
let score = document.getElementById("score");

let listener = function(event) {
    if(event.target.classList.contains('colored')) {
        score.value = ++count;
    }
    else{
        score.value = --count;
    }
}
function setColor() {
    circles.forEach(item => {
        item.style.background = "transparent";
        item.classList.remove("colored");
    });
    let randomCircle = circles[Math.floor(Math.random() * circles.length)];
    randomCircle.style.background = "#409eff";
    randomCircle.classList.add("colored");
}
function play() {
    count=0;
    score.value = 0;
    randomSelect = setInterval(setColor, 1500);
    circles.forEach(item => {
        item.addEventListener('click',listener)
    });
}
function stop() {
    clearInterval(randomSelect);
    alert('your score is '+score.value);
    circles.forEach(item => {
        item.removeEventListener('click', listener)
    })
    score.value = 0;
    count = 0;
}