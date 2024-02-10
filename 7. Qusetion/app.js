/*
First Method: using selectors inside the element
*/

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function () {
        console.log(question.classList.toggle("show-text"))
    })
})







/*
Second Method: traversing the dom
*/

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });