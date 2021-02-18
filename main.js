var FINAL_COUNTDOWN_TIME = new Date('February 18, 2021 15:55:00 GMT-04:00');
var INTERVAL_TIME_MSC = 1000;


function getTimeFormat(timeInMSec) {
  var h = Math.floor(timeInMSec / 1000 / 60 / 60);
  var m = Math.floor((timeInMSec / 1000 / 60 / 60 - h) * 60);
  var s = Math.floor(((timeInMSec / 1000 / 60 / 60 - h) * 60 - m) * 60);

  return { hrs: h, mins: m, secs: s };
}

function formatTimeElementText(number) {
  return String(number).padStart(2, '0')
}

function displayTime(element, timeLeftMSC) {
  var timeLeftFormatted = getTimeFormat(timeLeftMSC);
  element.innerText = formatTimeElementText(timeLeftFormatted.hrs) + '\xa0:\xa0'+ formatTimeElementText(timeLeftFormatted.mins) + '\xa0:\xa0' + formatTimeElementText(timeLeftFormatted.secs);
}

document.addEventListener('DOMContentLoaded', (event) => {
  var timerElement = document.querySelector('[data-js="timer"]')
  
  setInterval(function() {
    var timeLeft = FINAL_COUNTDOWN_TIME - new Date();
    displayTime(timerElement, timeLeft);
  }, INTERVAL_TIME_MSC);
  
})