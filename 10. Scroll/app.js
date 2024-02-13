// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle('show-link');
    const getLinksContainerHight = linksContainer.getBoundingClientRect().height
    const getLinksHight = links.getBoundingClientRect().height;

    if (getLinksContainerHight === 0) {
        linksContainer.style.height = `${getLinksHight}px`
    } else {
        linksContainer.style.height = 0
    }
});

// ********** fixed navbar ************

const nav = document.querySelector(".nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHight = window.pageYOffset;
    const navHight = nav.getBoundingClientRect().height;

    if (scrollHight > navHight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }

    if (scrollHight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


// ********** smooth scroll ************
// select links

const scrollLink = document.querySelectorAll(".scroll-link");


scrollLink.forEach(function (link) {
    link.addEventListener("click", function (event) {
        // prevent default
        event.preventDefault();
        // navigate to specific spot
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // calculate the height
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = nav.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        };

        if (navHeight > 82) {
            position = position + containerHeight;
        };

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0
    });
});