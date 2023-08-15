let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".Display-Timer");
let lapTimesList = document.querySelector(".lap-times");
let int = null;
let lapCounter = 1; // To keep track of lap numbers


document.getElementById("start-timer").addEventListener("click",() => {

if(int !== null) {
    clearInterval(int);

} 

int = setInterval(displayTimer, 10);
});


document.getElementById("pause-timer").addEventListener("click",() => {

clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click",() => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; 
    timeRef.innerHTML = "00: 00: 00: 000 ";
    lapTimesList.innerHTML = ""; // Clear lap times on reset
    lapCounter = 1;
});

document.getElementById("lap-timer").addEventListener("click", () => {
    if (int !== null) {
        const lapTime = formatTime(hours, minutes, seconds, milliseconds);
        const lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        lapTimesList.appendChild(lapItem);
        lapCounter++;
    }
});


function displayTimer() {
    milliseconds += 10;
    if(milliseconds ==1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    timeRef.innerHTML = formatTime(hours, minutes, seconds, milliseconds);
}

function formatTime(h, m, s, ms) {
    let formattedTime = `${h < 10 ? "0" + h : h}:`;
    formattedTime += `${m < 10 ? "0" + m : m}:`;
    formattedTime += `${s < 10 ? "0" + s : s}:`;
    formattedTime += `${ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms}`;
    return formattedTime;
}