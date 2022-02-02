const container = document.getElementById('container')
const column1 = document.getElementById('to-do-column')
const column2 = document.getElementById('doing-column')
const column3 = document.getElementById('done-column')
const plusTodo = document.getElementById('plusdiv')


//Add new to-do

var count = -1

const newTodo = () => {
    count += 1
    let newTodoDiv = document.createElement('div')
    let title = document.createElement('p')
    let input1 = document.createElement('textarea')
    let info = document.createElement('p')
    let input2 = document.createElement('textarea')
    let date = document.createElement('p')
    let dateInput = document.createElement('input')
    let buttons = document.createElement('div')
    let enter = document.createElement('input')
    let cancel = document.createElement('input')
    newTodoDiv.className = "to-do-input"
    buttons.className = "enter-and-cancel"
    enter.className = "enter"
    input1.className = "input1"
    input2.className = "input2"
    cancel.className = "cancel"
    title.className = "todo-title"
    info.className = "todo-title"
    date.className = "todo-title"
    dateInput.className = "date"
    dateInput.type = "date"
    input1.type = "text"
    input2.type = "text"
    enter.type = "submit"
    enter.value = "Add"
    cancel.type = "button"
    cancel.value = "Cancel"
    title.textContent = "Title"
    info.textContent = "Description"
    date.textContent = "Due date"
    input2.placeholder = "Add more details.."
    buttons.appendChild(enter)
    buttons.appendChild(cancel)
    newTodoDiv.appendChild(title)
    newTodoDiv.appendChild(input1)
    newTodoDiv.appendChild(info)
    newTodoDiv.appendChild(input2)
    newTodoDiv.appendChild(date)
    newTodoDiv.appendChild(dateInput)

    newTodoDiv.appendChild(buttons)
    plusTodo.appendChild(newTodoDiv)

    input1.focus()
    input1.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            plusTodo.removeChild(newTodoDiv)
            let newCardDiv = document.createElement('div')
            let card = document.createElement('p')
            let done = document.createElement('button')
            newCardDiv.className = "card-div"
            done.className = "done-btn"
            card.className = "card"
            done.type = "button"
            done.textContent = ">"
            card.textContent = input1.value
            done.id = count
            card.id = count
            newCardDiv.id = count
            card.spellcheck = false
            newCardDiv.appendChild(card)
            newCardDiv.appendChild(done)
            column1.appendChild(newCardDiv)
            todoBtn.style.display = "block"

            populateStorage()
        }
    })
    enter.onclick = () => {
        plusTodo.removeChild(newTodoDiv)
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
        newCardDiv.id = count
        card.spellcheck = false
        newCardDiv.appendChild(card)
        newCardDiv.appendChild(done)
        column1.appendChild(newCardDiv)
        todoBtn.style.display = "block"

        populateStorage()

    }
    cancel.onclick = () => {
        plusTodo.removeChild(newTodoDiv)
        todoBtn.style.display = "block"

    }
}


//Call to-do function from "+" button

const todoBtn = document.getElementById('newtodobtn')

todoBtn.addEventListener("click", (e) => {
    todoBtn.style.display = "none"
    console.log("hey")
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


//Move to-dos to in progress-done-remove

function moveTodo1(e) {
    var doneButtons = document.getElementsByClassName('done-btn')
    var cards = document.getElementsByClassName('card')
    var div = document.getElementsByClassName('card-div')

    for (let i = 0; i < doneButtons.length; i++) {
        if (doneButtons[i].id === e.target.id) {
            if (doneButtons[i].textContent == ">") {
                cards[i].className = "card in-progress"
                doneButtons[i].textContent = "🗸"
                column2.appendChild(div[i])
            }
        }
    }
}

function moveTodo2(e) {
    var doneButtons = document.getElementsByClassName('done-btn')
    var cards = document.getElementsByClassName('card')
    var div = document.getElementsByClassName('card-div')

    for (let i = 0; i < doneButtons.length; i++) {
        if (doneButtons[i].id === e.target.id) {
            if (doneButtons[i].textContent == "🗸") {
                cards[i].className = "card done-todo"
                doneButtons[i].textContent = "x"
                column3.appendChild(div[i])
            }
        }
    }
}

function moveTodo3(e) {
    var doneButtons = document.getElementsByClassName('done-btn')
    var div = document.getElementsByClassName('card-div')

    for (let i = 0; i < doneButtons.length; i++) {
        if (doneButtons[i].id === e.target.id) {
            if (doneButtons[i].textContent == "x") {
                column3.removeChild(div[i])
            }
        }
    }
}

container.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.className == "done-btn") {
        if (e.target.parentElement.childNodes[0].className == "card") {
            console.log("hey")
            moveTodo1(e)
            populateStorage()
        } else if (e.target.parentElement.childNodes[0].className == "card in-progress") {
            moveTodo2(e)
            populateStorage()
        } else if (e.target.parentElement.childNodes[0].className == "card done-todo") {
            moveTodo3(e)
            populateStorage()
        }
    }
})

/*
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
*/

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

if((!localStorage.getItem('cards1')) && (!localStorage.getItem('cards2')) && (!localStorage.getItem('cards3'))) {
    console.log("storage empty")
    populateStorage();

    //localStorage.clear()

} else {
    console.log("load complete")
    setStyles()

    //localStorage.clear()
}

//Get saved data

function setStyles() {
    var currentCount = localStorage.getItem('count')
    var currentCards1 = localStorage.getItem('cards1')
    var currentCards2 = localStorage.getItem('cards2')
    var currentCards3 = localStorage.getItem('cards3')

    document.getElementById('to-do-column').innerHTML = currentCards1
    document.getElementById('doing-column').innerHTML = currentCards2
    document.getElementById('done-column').innerHTML = currentCards3

    count = Number(currentCount)
}


//Set data

function populateStorage() {
    localStorage.setItem('cards1', document.getElementById('to-do-column').innerHTML)
    localStorage.setItem('cards2', document.getElementById('doing-column').innerHTML);
    localStorage.setItem('cards3', document.getElementById('done-column').innerHTML);

    localStorage.setItem('count', count)
    setStyles();
}
