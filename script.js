let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    document.querySelector('.btn-primary').innerText = 'Pause';
    running = true;
  } else {
    clearInterval(timer);
    document.querySelector('.btn-primary').innerText = 'Resume';
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector('.btn-primary').innerText = 'Start';
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('display').innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function lap() {
  const lapTime = document.createElement('li');
  lapTime.classList.add('list-group-item');
  lapTime.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  document.getElementById('laps').appendChild(lapTime);
}

