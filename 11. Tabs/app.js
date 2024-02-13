const btns = document.querySelectorAll(".tab-btn");
const aboutContent = document.querySelector(".about");
const articelContents = document.querySelectorAll(".content");

aboutContent.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active")
        });

        // hide other article
        articelContents.forEach(function (article) {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});