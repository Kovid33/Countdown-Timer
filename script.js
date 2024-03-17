let newY = document.getElementById("newY");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let newYear = "1 Jan 2025";

newY.innerHTML = newYear;

setInterval(() => {
  let nydate = new Date(newYear);
  let cdate = new Date();
  let tsec = (nydate - cdate) / 1000;

  let day = Math.floor(tsec / 3600/24);

  let hr = Math.floor((tsec / 3600) % 24);

  let min = Math.floor((tsec / 60) % 60);

  let sec = Math.floor(tsec % 60);

  days.innerHTML = day;
  hours.innerHTML = formatTime(hr);
  minutes.innerHTML = formatTime(min);
  seconds.innerHTML = formatTime(sec);
}, 1000);

function formatTime(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}
