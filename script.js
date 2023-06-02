var addTens = document.getElementById('tens');
var addSeconds = document.getElementById('seconds');
var crrtTime = document.getElementById('crrt-time');
var crrtHour = document.getElementById('crrt-hour');
var crrtMin = document.getElementById('crrt-minute');
var crrtSec = document.getElementById('crrt-second');

startButton = document.getElementById('start-button')
stopButton = document.getElementById('stop-button')
clearButton = document.getElementById('reset-button')

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


miliSec = 00;
seconds = 00;

startTimer = function () {
    miliSec ++
    if(miliSec < 9 ) {
        addTens.innerHTML = "0" + miliSec;
     }
     if(miliSec>9) {
        addTens.innerHTML = miliSec;
     }
     if(miliSec > 99){
       seconds ++;
       addSeconds.innerHTML = "0" +seconds
       miliSec = 0;
       addTens.innerHTML = "0" + miliSec
     }
     if(seconds >9) {
        addSeconds.innerHTML = seconds
     }

}

startButton.onclick = function () {
    interval = setInterval(startTimer);
     document.getElementById('start-button').disabled = true;
}
stopButton.onclick = function() {
    clearInterval(interval);
    document.getElementById('start-button').disabled = false;
}
clearButton.onclick = function() {
    clearInterval(interval);
    addSeconds.innerHTML = "00";
    addTens.innerHTML="00";
}
//   start script of Timer
  var myTime = function() {
    setInterval(function() {
        var date = new Date();
        crrtHour.innerHTML = date.getHours();
        if(date.getHours()<9) {
            return crrtHour.innerHTML = "0" +date.getHours()
        }
        crrtMin.innerHTML = date.getMinutes();
        if(date.getMinutes()<=9) {
            return crrtMin.innerHTML = "0" +date.getMinutes();
        }
         crrtSec.innerHTML = date.getSeconds();
         if(date.getSeconds()<=9) {
            return crrtSec.innerHTML = "0" +date.getSeconds();
        }
       },1000);

  };
   
   crrtTime.onclick = function() {
    myTime();
    document.getElementById('crrt-time').style.display= "none";
    document.getElementById('my-timer').style.display = "block"
   };
//end script of Timer
   
// Start script of Clock
    setInterval(function() {
        let date = new Date();
    let hh = date.getHours() *30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() *deg;

    hr.style.transform = `rotateZ(${(hh) +(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    },1000);
// end script of Clock
    
//slider script
const slider = document.querySelector('.timer-app');
const sliderMain = document.getElementById('timer-container');
const prevBtn = document.querySelector('.button-slider-left');
const nxtBtn = document.querySelector('.button-slider-right');
const sliderItems = document.querySelectorAll('.timer-item');
const sliderTask = document.querySelectorAll('.slider-task');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;

let transformx = 0;
let index = 0;
nxtBtn.addEventListener("click", function() {
         changeSlides(1);

});
prevBtn.addEventListener("click", function() {
        changeSlides(-1);
});
function changeSlides(direction) {
    if(direction == 1 ) {
        index++;
        if(index > sliderLength - 1) {
            index = sliderLength-1;
           return;
        }
        transformx -= sliderItemWidth;
        sliderMain.style = `transform: translateX(${transformx}px)`;
        console.log(transformx)
    }
   else if(direction == -1) {
        index--;
        if(index < 0) {
            index = 0;
            return;
         }
        transformx = transformx + sliderItemWidth;
        sliderMain.style = `transform: translateX(-${transformx}px)`;
        console.log(transformx);
    }
};







