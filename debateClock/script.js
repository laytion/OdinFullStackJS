let playing = false;
let currentPlayer = 1;
const panel = document.querySelector('.player')
const buttons = document.querySelectorAll('.bttn');
const startbttn = document.getElementById('timer_start_bttn');
const switchbttn = document.getElementById('timer_switch_bttn');
const pausebttn = document.getElementById('timer_pause_bttn');
player1min = document.getElementById('min1')
player2min = document.getElementById('min2')
player1sec = document.getElementById('sec1')
player2sec = document.getElementById('sec2')
borderp1 = document.querySelector('.player_tile1')
borderp2 = document.querySelector('.player_tile2')


console.log(buttons)

const padZero = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number
}

const swapPlayer = () => {
    if (!playing) return;

    if (currentPlayer == 1) {
        return currentPlayer = 2;
    }
    else {
        return currentPlayer = 1;
    }
}

const startTimer = () => {
    playing = true;
    let p1sec = 60;
    let p2sec = 60;

    let timerId = setInterval(function () {
        if (currentPlayer === 1) {
            if (playing) {
                buttons[0].disabled = true;
                borderp1.style.boxShadow = ' inset 3px 3px 0 #FF00FF, inset -3px 3px 0 #FF00FF, inset -3px -3px 0 #FF00FF, inset 3px -3px #FF00FF';
                borderp2.style.boxShadow = ' inset 3px 3px 0 black, inset -3px 3px 0 black, inset -3px -3px 0 black, inset 3px -3px black';
                p1time.minutes = parseInt(p1time.getMinutes('min1'), 10)
                if (p1sec === 60) {
                    p1time.minutes = p1time.minutes - 1;
                }
                p1sec = p1sec - 1
                document.getElementById('sec1').textContent = padZero(p1sec);
                document.getElementById('min1').textContent = padZero(p1time.minutes);

                if (p1sec === 0) {
                    if (p1sec === 0 && p1time.minutes === 0) {
                        clearInterval(timerId);
                        playing = false;
                    }
                    p1sec = 60
                }
            }
        }

        else {
            if (playing) {
                borderp2.style.boxShadow = ' inset 3px 3px 0 #FF00FF, inset -3px 3px 0 #FF00FF, inset -3px -3px 0 #FF00FF, inset 3px -3px #FF00FF';
                borderp1.style.boxShadow = ' inset 3px 3px 0 black, inset -3px 3px 0 black, inset -3px -3px 0 black, inset 3px -3px black';
                p2time.minutes = parseInt(p2time.getMinutes('min2'), 10);
                if (p2sec === 60) {
                    p2time.minutes = p2time.minutes - 1;
                }
                p2sec = p2sec - 1;
                document.getElementById('sec2').textContent = padZero(p2sec);
                document.getElementById('min2').textContent = padZero(p2time.minutes);

                if (p2sec == 0) {
                    if (p2sec == 0 && p2time.minutes == 0) {
                        clearInterval(timerId);
                        playing = false;
                    }
                    p2sec = 60
                }
            }
        }
    }, 1000)
}

const pauseTimer = () => {
    playing = false;
    buttons[2].textContent = 'CONTINUE';
}

const continueTimer = () => {
    playing = true;
    buttons[2].textContent = 'PAUSE';

}

class Timer {
    constructor(player, minutes) {
        this.player = player;
        this.minutes = minutes;
    }

    getMinutes(timeId) {
        return document.getElementById(timeId).textContent;
    }
}

const normalTimer = () => {
    player1min.textContent = 4
    player2min.textContent = 4
    player1sec.textContent = padZero(0)
    player2sec.textContent = padZero(0)
}

const CFTimer = () => {
    player1min.textContent = 3;
    player2min.textContent = 3;
    player1sec.textContent = padZero(0)
    player2sec.textContent = padZero(0)
}

const GCFTimer = () => {
    player1min.textContent = 10;
    player2min.textContent = 10;
    player1sec.textContent = padZero(0)
    player2sec.textContent = padZero(0)
}


let p1time = new Timer('min1', document.getElementById('min1').textContent)
let p2time = new Timer('min2', document.getElementById('min2').textContent)

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === 'START') {
            startTimer();
        }
        else if (buttons[i].textContent === 'PAUSE') {
            pauseTimer();
        }
        else if (buttons[i].textContent === 'SWITCH') {
            swapPlayer();
        }
        else if (buttons[i].textContent === 'CONTINUE') {
            continueTimer();
        }
        else if (buttons[i].textContent === 'N') {
            normalTimer()
        }
        else if (buttons[i].textContent === 'CF') {
            CFTimer();
        }
        else if (buttons[i].textContent === 'GCF') {
            GCFTimer();
        }
    })
}

