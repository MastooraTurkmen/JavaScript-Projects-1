// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert")
const groceryContainer = document.querySelector(".grocery-container")
const form = document.querySelector(".grocery-form");
const list = document.querySelector(".grocery-list");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn")
const clearBtn = document.querySelector(".clear-btn")

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        console.log("add a file to list")
    } else if (value && editFlag) {
        console.log("editing")
    } else {
        displayAlert("Please, Enter a Value", "danger");
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
