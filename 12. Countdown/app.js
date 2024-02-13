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
const deadlineFormat = document.querySelectorAll(".deadline-format");


const futureDate = new Date(2024, 2, 25, 11, 30, 0);


const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];


giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}: ${minutes} am`