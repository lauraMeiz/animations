/*function initLocalClocks() {
  // Get the local time using JS
  let date = new Date();
  let secondsT = date.getSeconds();
  let minutesT = date.getMinutes();
  let hoursT = date.getHours();

  // Create an object with each hand and it's angle in degrees
  let hands = [
    {
      hand: "hoursT",
      angle: hoursT * 30 + minutesT / 2,
    },
    {
      hand: "minutesT",
      angle: minutesT * 6,
    },
    {
      hand: "secondsT",
      angle: secondsT * 6,
    },
  ];
  // Loop through each of these hands to set their angle
  for (let j = 0; j < hands.length; j++) {
    let elements = document.querySelectorAll("." + hands[j].hand);
    for (let k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = "rotateZ(" + hands[j].angle + "deg)";
      elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === "minutesT") {
        elements[k].parentNode.setAttribute(
          "data-second-angle",
          hands[j + 1].angle
        );
      }
    }
  }
}
*/

const min = document.querySelector(".minutesT");
const sec = document.querySelector(".secondsT");
const hour = document.querySelector(".hoursT");
setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 60) * 360 - 90;
  sec.style.transform = `rotate(${secDeg}deg)`;
  min.style.transform = `rotate(${minDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
  console.log();
}, 1000);
