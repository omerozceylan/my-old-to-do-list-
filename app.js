let formNode = document.querySelector('#form')
let inputNode = document.querySelector('#input')
let todoList = document.querySelector('#theToDoList')
const alertNode = document.querySelector('#alert')


formNode.addEventListener("submit", getInput)

//listCount is counting the list elements
let listCount

function getInput(event){
    event.preventDefault()
    listCount = todoList.getElementsByTagName("li").length+1
    if(listCount==7){
        alertNode.style.display = "block"
    }

    if(inputNode.value==="" || listCount==7) return 
    createElement(inputNode.value)
}



let toDoInnerTexts = document.querySelectorAll('.inner-text-element')

function createElement(text){
    inputNode.value = ""
    let html = `<li class="toDoElement"><span>${text}</span><button class="clearButton" onclick="deleteItem(this)">x</button></li>`
    todoList.insertAdjacentHTML("beforeend", html)
}

function deleteItem(item){
    item.parentElement.remove()
    alertNode.style.display = "none"
}

toDoInnerTexts.forEach((element)=> {
    element.addEventListener('click',function(){
        element.style.textDecoration = "underline"
        console.log('sfdasgd');
    })
})
