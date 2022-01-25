const container = document.getElementById('container')


//Add new to-do

var count = -1

const newTodo = () => {
    count += 1
    let newTodoDiv = document.createElement('div')
    let input = document.createElement('textarea')
    let buttons = document.createElement('div')
    let enter = document.createElement('input')
    let cancel = document.createElement('input')
    newTodoDiv.className = "todo"
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
    container.appendChild(newTodoDiv)

    input.focus()
    input.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            newTodoDiv.style.display = "none"
            let newCardDiv = document.createElement('div')
            let card = document.createElement('textarea')
            let done = document.createElement('button')
            newCardDiv.className = "card-div"
            done.className = "done-btn"
            card.className = "card"
            done.type = "button"
            done.textContent = "🗸"
            card.textContent = input.value
            done.id = count
            card.id = count
            newCardDiv.id = "carddiv"
            card.spellcheck = false
            newCardDiv.appendChild(card)
            newCardDiv.appendChild(done)
            container.appendChild(newCardDiv)
            todoBtn.style.display = "block"
        }
    })
    enter.onclick = () => {
        newTodoDiv.style.display = "none"
        let newCardDiv = document.createElement('div')
        let card = document.createElement('textarea')
        let done = document.createElement('button')
        newCardDiv.className = "card-div"
        done.className = "done-btn"
        card.className = "card"
        done.type = "button"
        done.textContent = "🗸"
        card.textContent = input.value
        done.id = count
        card.id = count
        newCardDiv.id = "carddiv"
        card.spellcheck = false
        newCardDiv.appendChild(card)
        newCardDiv.appendChild(done)
        container.appendChild(newCardDiv)
        todoBtn.style.display = "block"

    }
    cancel.onclick = () => {
        container.removeChild(newTodoDiv)
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
            if (doneButtons[i].textContent == "🗸") {
                cards[i].className = "card done-todo"
                doneButtons[i].textContent = "x"
            } else if (doneButtons[i].textContent == "x") {
                container.removeChild(div[i])
            }
        }
    }
}

container.addEventListener("click", (e) => {
    if (e.target.className == "done-btn") {
        doneAndDelete(e)
    }
})


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

