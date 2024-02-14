const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h4");


const futureDate = new Date(2024, 2, 25, 11, 30, 0);


const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];


giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}: ${minutes}`



function displayDate() {
  const today = new Date().getTime();
  const t = futureDate - today;

  // 1sec = 1000ms
  // 1min = 1000 * 60
  // 1hour = 60 * 60 * 1000
  // 1day = 24 * 60 * 60 * 1000


  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 1000 * 60;

  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    } else {
      return item;
    }
  }

  deadlineFormat.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  })

}

displayDate();
