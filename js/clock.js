setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secandHand = document.querySelector('[data-secand-hand]');

function setClock(){
    const currentDate = new Date();
    const secandsRatio = currentDate.getSeconds() /60;
    const minuteRatio = (secandsRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secandHand,secandsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand,hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock();