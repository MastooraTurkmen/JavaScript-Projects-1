const sidebarToggle = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".close-btn")

sidebarToggle.addEventListener('click', function () {
    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar")
    // } else {
    //     sidebar.classList.add("show-sidebar")
    // }

    sidebar.classList.toggle("show-sidebar")

})