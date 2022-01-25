const container = document.getElementById('container')
var count = -1

const newTodo = () => {
    count += 1
    let newTodoDiv = document.createElement('div')
    let input = document.createElement('textarea')
    let enter = document.createElement('input')
    let cancel = document.createElement('input')
    newTodoDiv.className = "todo"
    enter.className = "enter"
    input.className = "input"
    cancel.className = "cancel"
    input.type = "text"
    enter.type = "submit"
    enter.value = "Add todo event"
    cancel.type = "button"
    cancel.value = "Cancel"
    newTodoDiv.appendChild(input)
    newTodoDiv.appendChild(enter)
    newTodoDiv.appendChild(cancel)
    container.appendChild(newTodoDiv)

    input.focus()
    input.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            newTodoDiv.style.display = "none"
            let newCardDiv = document.createElement('div')
            let card = document.createElement('textarea')
            let done = document.createElement('button')
            newCardDiv.className = "carddiv"
            done.className = "done"
            done.type = "button"
            done.textContent = "x"
            card.id = count
            card.className = "card"
            card.textContent = input.value
            card.spellcheck = false
            newCardDiv.appendChild(card)
            newCardDiv.appendChild(done)
            container.appendChild(newCardDiv)
            todoBtn.style.display = "block"
        }
    })
    

    enter.onclick = () => {
        newTodoDiv.style.display = "none"
        let card = document.createElement('textarea')
        card.id = count
        card.className = "card"
        card.textContent = todo.value
        card.spellcheck = false
        container.appendChild(card)
        todoBtn.style.display = "block"

    }

    cancel.onclick = () => {
        container.removeChild(newTodoDiv)
        todoBtn.style.display = "block"

    }

}

const todoBtn = document.getElementById('newtodobtn')

todoBtn.addEventListener("click", (e) => {
    todoBtn.style.display = "none"
    newTodo()
})


container.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        var cards = document.getElementsByClassName('card')
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].id == i) {
                cards[i].blur()
            }
        }
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

