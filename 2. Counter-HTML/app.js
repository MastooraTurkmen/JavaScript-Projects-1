const value = document.getElementById('value')
const btns = document.querySelectorAll(".btn")

let count = 0;

btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const style = e.currentTarget.classList
        console.log(style)
        if (style.contains("increase")) {
            count++;
        } else if (style.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        value.textContent = count

        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
    })
})