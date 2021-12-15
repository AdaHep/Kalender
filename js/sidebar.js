window.addEventListener("load", main);

function main() {
  sidebarDateClock();
  setInterval(sidebarDateClock, 1000);
}

function sidebarDateClock() {
  let clock = document.getElementById("clock");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  currentDate();
}

function currentDate() {
  let date = document.getElementById("date");
  let days = new Date();
  const options = { weekday: "long" };
  let newDate = new Date().toISOString().slice(0, 10);

  date.innerHTML = days.toLocaleDateString("se-SE", options) + "<br>" + newDate;
}
