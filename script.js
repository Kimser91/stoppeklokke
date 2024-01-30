

let minutes = 0;
let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let appendMinutes = document.getElementById("minutes")
let roundTime = document.getElementById('lap');
let interval ;

function startBtn() {
clearInterval(interval);
   interval = setInterval(startTimer, 10);
}

function stopBtn() {
clearInterval(interval);
}

function resetBtn() {
  location.reload()
}

function lapBtn(){
  
  roundTime.innerHTML += 
  `<li><span>${minutes}</span>:
  <span>${seconds}</span>:
  <span>${tens}</span>
  </li>`;
                          

  clearInterval(interval);
 
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
  interval = setInterval(startTimer, 10);
 
}


function startTimer() {
tens++;
if(tens <=9){
appendTens,innerHTML = "0" + tens;
}

if (tens > 9) {
appendTens.innerHTML = tens;
}

if (tens >99) {
seconds++;
appendSeconds.innerHTML = "0" + seconds;
tens = 0;
appendTens.innerHTML = "0" + 0;
}

if (seconds > 9) {
appendSeconds.innerHTML = seconds;
}

if (seconds >59) {
minutes++;
appendMinutes.innerHTML = "0" + minutes;
seconds = 0;
appendSeconds.innerHTML = "0" + 0;
}

if (minutes > 9){
appendMinutes.innerHTML = minutes;
}

}









// window.onload = function() {
//     let minutes = 00;
//     let seconds = 00;
//     let tens = 00;
//     let appendTens = document.getElementById("tens")
//     let appendSeconds = document.getElementById("seconds")
//     let appendMinutes = document.getElementById("minutes")
//     let buttonStart = document.getElementById('start');
//     let buttonStop = document.getElementById('stopp');
//     let buttonReset = document.getElementById('reset');
//     let interval ;

//   buttonStart.onclick = function() {
//     clearInterval(interval);
//        interval = setInterval(startTimer, 10);
//     }
  
//   buttonStop.onclick = function() {
//     clearInterval(interval);
//     }
  
//   buttonReset.onclick = function() {
//     clearInterval(interval);
//     tens = "00";
//     seconds = "00";
//     minutes = "00";
//     appendTens.innerHTML = tens;
//     appendSeconds.innerHTML = seconds;
//     appendMinutes.innerHTML = minutes;
//   }
  


// function startTimer() {
// tens++;
// if(tens <=9){
//   appendTens,innerHTML = "0" + tens;
// }

// if (tens > 9) {
//   appendTens.innerHTML = tens;
// }

// if (tens >99) {
//   console.log("seconds");
//   seconds++;
//   appendSeconds.innerHTML = "0" + seconds;
//   tens = 0;
//   appendTens.innerHTML = "0" + 0;
// }

// if (seconds > 9) {
//   appendSeconds.innerHTML = seconds;
// }

// if (seconds >59) {
//   console.log("minutes");
//   minutes++;
//   appendMinutes.innerHTML = "0" + minutes;
//   seconds = 0;
//   appendSeconds.innerHTML = "0" + 0;
// }

// if (minutes > 9){
//   appendMinutes.innerHTML = minutes;
// }

// }
// }