let formNode = document.querySelector('#form')
let inputNode = document.querySelector('#input')
let todoList = document.querySelector('#theToDoList')

formNode.addEventListener("submit", getInput)

function getInput(event){
    event.preventDefault()
    const listCount = todoList.getElementsByTagName("li").length+1
    if(inputNode.value==="" || listCount==7) return 
    createElement(inputNode.value)
}

function createElement(text){
    inputNode.value = ""
    let html = `<li class="toDoElement">${text}<button class="clearButton" onclick="deleteItem(this)">x</button></li>`
    todoList.insertAdjacentHTML("beforeend", html)
}

function deleteItem(item){
    item.parentElement.remove()
}

