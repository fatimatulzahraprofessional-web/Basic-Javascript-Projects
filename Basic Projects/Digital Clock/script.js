

function updateClock() {

    let now = new Date();
    let hours = now.getHours();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();


    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    hoursElement.textContent=hours;
    minutesElement.textContent=minutes;
    secondsElement.textContent=seconds;
}
setInterval(updateClock,1000);