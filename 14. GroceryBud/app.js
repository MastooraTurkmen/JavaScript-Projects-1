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


// ****** FUNCTIONS **********

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
        const deleteBtn = document.querySelector(".delete-btn");
        const editBtn = document.querySelector(".edit-btn");

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);


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
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        setBackToDefault();
        editLocalStorage(editID)
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

// delete Item

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if (list.classList.length === 0) {
        groceryContainer.classList.remove("show-container")
    }

    displayAlert("Item removed", "danger")
    setBackToDefault();

    // remove from local storage
    // removeLocalStorage(id);
}

// edite Item

function editItem() {
    const element = e.currentTarget.parentElement.parentElement;

    // set edit element
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";

}

// set back to defaul

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    submitBtn.textContent = "submit";
    editID = "";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
    console.log("add to local storage");
}

function removeLocalStorage(id){}


function editLocalStorage(id, value) {}
// ****** SETUP ITEMS **********