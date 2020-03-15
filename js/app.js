var circles = document.querySelectorAll('.circle');
const score = document.getElementById('score');
let count = 0;
let timeInterval;

let clickHandler = function (event) {
    if (event.target.classList.contains('colored')) {
        score.value = ++count;
    } else {
        score.value = --count;
    }
};

let resetCounter = function () {
    count = 0;
    score.value = count;
    resetCirleColor();
}

let resetCirleColor = function () {
    circles.forEach(circle => {
        circle.style.background = "transparent";
        circle.classList.remove('colored');
    });
}

let coloredCircle = function () {
    resetCirleColor();
    let randomCircle = circles[Math.floor(Math.random() * circles.length)];
    randomCircle.style.background = "#409eff";
    randomCircle.classList.add('colored');
}

let play = function () {
    resetCounter();
    timeInterval = setInterval(coloredCircle, 2000);
    circles.forEach(circle => circle.addEventListener('click', clickHandler));
}

let stop = function () {
    clearInterval(timeInterval);
    alert('your score is '+score.value);
    resetCounter();
    circles.forEach(circle => {
        circle.removeEventListener('click', clickHandler)
    })
}