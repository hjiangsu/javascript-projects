const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.clock-text');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutesDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    const clockText = ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);

    time.innerHTML = clockText;
}

setInterval(setDate, 1000);