window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#reset").onclick = reset;
}

function calculate () {
let date = document.querySelector("#date").value;
let time = document.querySelector("#time").value;

let stop = document.querySelector("#stop");

let endTime = new Date(date + " " + time);

let interval = setInterval(() => calculateTime(endTime), 1000);

stop.addEventListener("click", () =>{
    clearInterval(interval);
})

}

function calculateTime(endTime) {
    let currentTime = new Date();

    let days = document.querySelector("#countdown-days");
    let hours = document.querySelector("#countdown-hours");
    let minutes = document.querySelector("#countdown-minutes");
    let seconds = document.querySelector("#countdown-seconds");

    if(endTime > currentTime) {
        let timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft)
    days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
    hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
    minutes.innerText = Math.floor((timeLeft / 60) % 60);
    seconds.innerText = Math.floor(timeLeft % 60);

    } else {
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }
}

function reset () {
    document.querySelector("#countdown-days").innerText = 0;
    document.querySelector("#countdown-hours").innerText = 0;
    document.querySelector("#countdown-minutes").innerText = 0;
    document.querySelector("#countdown-seconds").innerText = 0;

}


