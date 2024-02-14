// ****** SELECT ITEMS **********

const alet = document.querySelector(".alert")
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
        console.log("empty list")
    }

}

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
