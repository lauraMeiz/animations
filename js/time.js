const timeDOM = document.querySelector(".time");
const timeReset = 0;
let timeTime = 864000;
function updateClock() {
  if (timeTime === timeReset) {
    timeTime = -1;
  }
  timeTime--;
  const d = Math.floor(timeTime / 86400);
  const h = Math.floor((timeTime - d * 86400) / 3600);
  const m = Math.floor((timeTime - h * 3600 - d * 86400) / 60);
  const s = timeTime % 60;
  timeDOM.innerText = `${d} days ${h} hours ${m} minutes ${s} seconds `;
}

setInterval(updateClock, 1000);
