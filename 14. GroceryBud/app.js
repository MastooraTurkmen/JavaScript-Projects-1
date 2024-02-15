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
clearBtn.addEventListener("click", removeItem);

function addItem(e) {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        const element = document.createElement("article");
        // add class
        element.classList.add("grocery-item");
        // add id
        const arrt = document.createAttribute("data-id");
        arrt.value = id;

        element.setAttributeNode(arrt);
        element.innerHTML = `
        <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
        `;
        // append child
        list.appendChild(element);

        // display alert
        displayAlert("Item added", "success");

        // show container
        groceryContainer.classList.add("show-container")

        // add to local storage
        addToLocalStorage(id, value);

        // set Back to Default
        setBackToDefault();

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

// remove item

function removeItem() {
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    };
    groceryContainer.classList.remove("show-container");
    displayAlert("empty container", "danger");
    setBackToDefault();

}

// set back to defaul

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    submitBtn.textContent = "submit";
    editID = "";
}


// ****** FUNCTIONS **********

function addToLocalStorage(id, value) {
    console.log("add to local storage");
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
