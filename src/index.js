const container = document.getElementById('container')

const newTodo = () => {
    let newTodoDiv = document.createElement('div')
    let todo = document.createElement('textarea')
    let enter = document.createElement('input')
    newTodoDiv.className = "todo"
    enter.className = "enter"
    todo.className = "input"
    todo.type = "text"
    enter.type = "submit"
    enter.value = "Add todo"
    newTodoDiv.appendChild(todo)
    newTodoDiv.appendChild(enter)
    container.appendChild(newTodoDiv)
    enter.onclick = () => {
        newTodoDiv.style.display = "none"
        let card = document.createElement('p')
        card.className = "card"
        card.textContent = todo.value
        container.appendChild(card)
        todoBtn.style.display = "block"

    }

}

const todoBtn = document.getElementById('todo')

todoBtn.addEventListener("click", (e) => {
    todoBtn.style.display = "none"
    newTodo()
})

console.log("to do")

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
window.openForm = openForm

const popupForm = document.getElementById('myForm')
const closeBtn = document.getElementById('cancel')
closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none"
})

