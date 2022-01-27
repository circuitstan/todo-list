const container = document.getElementById('container')
const column1 = document.getElementById('to-do-column')
const column2 = document.getElementById('doing-column')
const column3 = document.getElementById('done-column')

//todo: add id-s to newcarddiv

//Add new to-do

var count = -1

const newTodo = () => {
    count += 1
    let newTodoDiv = document.createElement('div')
    let input = document.createElement('textarea')
    let buttons = document.createElement('div')
    let enter = document.createElement('input')
    let cancel = document.createElement('input')
    newTodoDiv.className = "to-do"
    buttons.className = "enter-and-cancel"
    enter.className = "enter"
    input.className = "input"
    cancel.className = "cancel"
    input.type = "text"
    enter.type = "submit"
    enter.value = "Add to-do"
    cancel.type = "button"
    cancel.value = "Cancel"
    buttons.appendChild(enter)
    buttons.appendChild(cancel)
    newTodoDiv.appendChild(input)
    newTodoDiv.appendChild(buttons)
    column1.appendChild(newTodoDiv)

    input.focus()
    input.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            column1.removeChild(newTodoDiv)
            let newCardDiv = document.createElement('div')
            let card = document.createElement('textarea')
            let done = document.createElement('button')
            newCardDiv.className = "card-div"
            done.className = "done-btn"
            card.className = "card"
            done.type = "button"
            done.textContent = ">"
            card.textContent = input.value
            done.id = count
            card.id = count
            newCardDiv.id = "carddiv"
            card.spellcheck = false
            newCardDiv.appendChild(card)
            newCardDiv.appendChild(done)
            column1.appendChild(newCardDiv)
            todoBtn.style.display = "block"
            populateStorage()
        }
    })
    enter.onclick = () => {
        column1.removeChild(newTodoDiv)
        let newCardDiv = document.createElement('div')
        let card = document.createElement('textarea')
        let done = document.createElement('button')
        newCardDiv.className = "card-div"
        done.className = "done-btn"
        card.className = "card"
        done.type = "button"
        done.textContent = ">"
        card.textContent = input.value
        done.id = count
        card.id = count
        newCardDiv.id = "carddiv"
        card.spellcheck = false
        newCardDiv.appendChild(card)
        newCardDiv.appendChild(done)
        column1.appendChild(newCardDiv)
        todoBtn.style.display = "block"
        populateStorage()

    }
    cancel.onclick = () => {
        column1.removeChild(newTodoDiv)
        todoBtn.style.display = "block"

    }
}


//Call to-do function from "+" button

const todoBtn = document.getElementById('newtodobtn')

todoBtn.addEventListener("click", (e) => {
    todoBtn.style.display = "none"
    newTodo()
})


//Unfocus text area with Enter key

container.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        var cards = document.getElementsByClassName('card')
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id == i) {
                cards[i].blur()
            }
        }
    }
})


//Mark to-do as done and remove to-do

function doneAndDelete(e) {
    var doneButtons = document.getElementsByClassName('done-btn')
    var cards = document.getElementsByClassName('card')
    var div = document.getElementsByClassName('card-div')

    for (let i = 0; i < doneButtons.length; i++) {
        if (doneButtons[i].id == e.target.id) {
            if (doneButtons[i].textContent == ">") {
                cards[i].className = "card in-progress"
                doneButtons[i].textContent = "🗸"
            } else if (doneButtons[i].textContent == "🗸") {
                cards[i].className = "card done-to-do"
                doneButtons[i].textContent = "x"
            } else if (doneButtons[i].textContent == "x") {
                column1.removeChild(div[i])
            }
        }
    }
}

container.addEventListener("click", (e) => {
    if (e.target.className == "done-btn") {
        doneAndDelete(e)
        populateStorage()
    }
})

//Move to-do to "in progress"

function inProgress(e) {
    var doneButtons = document.getElementsByClassName('done-btn')
    var cards = document.getElementsByClassName('card')
    var div = document.getElementsByClassName('card-div')
    for (let i = 0; i < doneButtons.length; i++) {
        if (doneButtons[i].id == e.target.id) {
            if (doneButtons[i].textContent == ">") {
                cards[i].className = "card in-progress"
                doneButtons[i].textContent = "🗸"
            } else if (doneButtons[i].textContent == "🗸") {
                cards[i].className = "card done-to-do"
                doneButtons[i].textContent = "x"
            } else if (doneButtons[i].textContent == "x") {
                column1.removeChild(div[i])
            }
        }
    }
}


//form bottom right

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
window.openForm = openForm

const popupForm = document.getElementById('myForm')
const closeBtn = document.getElementById('cancel')
closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none"
})


//Check localStorage availability

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    console.log("localStorage works")
}
else {
    console.log("Error: localStorage not working")
}


//Test for previous data

if(!localStorage.getItem('cards')) {
    console.log("storage empty")
    populateStorage();
} else {
    console.log("load complete")
    setStyles();
}


//Get saved data

function setStyles() {
    var currentCount = localStorage.getItem('count')
    var currentCards = localStorage.getItem('cards'); 
    document.getElementById('to-do-column').innerHTML = currentCards;
    count = Number(currentCount)
}


//Set data

function populateStorage() {
    localStorage.setItem('cards', document.getElementById('to-do-column').innerHTML);
    localStorage.setItem('count', count)
    setStyles();
}
