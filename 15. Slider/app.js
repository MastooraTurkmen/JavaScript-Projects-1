const slider = document.querySelector(".slide");
const prevBtn = document.querySelector("prevBtn");
const nextBtn = document.querySelector("nextBtn");


slider.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
})