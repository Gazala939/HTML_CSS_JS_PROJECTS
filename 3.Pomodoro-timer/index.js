const startEl = document.getElementById("start")

const stopEl = document.getElementById("stop")

const resetEl = document.getElementById("reset")

const timerEl = document.getElementById("timer")

// use setInterval to run code repeatedly after fixed time

let interval;
// for 25 seconds = 1500
let timeLeft = 1800;

function updateTimer(){
    let minutes = Math.floor(timeLeft/60);

    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    timerEl.innerHTML=formattedTime;
}

function startTime(){
    interval = setInterval(()=>{
        timeLeft--
        updateTimer();

        if(timeLeft == 0){
            clearInterval(interval);
            alert("Times Up......")
            timeLeft = 1800
            updateTimer()
        }
    },1000);
}

function stopTime(){
    clearInterval(interval)
}

function resetTime(){
    clearInterval(interval)
    timeLeft = 1800
    updateTimer()
}

startEl.addEventListener("click", startTime);

stopEl.addEventListener("click", stopTime);

resetEl.addEventListener("click",resetTime)