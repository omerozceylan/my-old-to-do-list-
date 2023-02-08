let form = document.querySelector('#form')
let arrayToDo = JSON.parse(localStorage.getItem('toDoArray')) 
let isPageRefresh = false
function atStart(){
    if(isPageRefresh==false){
        if(!arrayToDo){
            localStorage.setItem('toDoArray', JSON.stringify([]))
            isPageRefresh=true
        }else{
            arrayToDo.forEach(element => {
            createItem(element)
            })  
        }
    }

    console.log('array : '+ arrayToDo);
}
atStart()

form.addEventListener('submit', function(event){
        event.preventDefault()
        let input = document.querySelector('#input')
        if(!input.value == ""){
            let text = input.value
            console.log(text)
            arrayToDo.push(text)
            localStorage.setItem('toDoArray',JSON.stringify(arrayToDo))
            createItem(text)
        }
        input.value = ""
})

function createItem(toDoElement){
        console.log('hey');
        let theToDoList = document.querySelector('#theToDoList')
        let listElement = document.createElement('li')
        listElement.classList.add('element')
        listElement.innerHTML = `<li class="toDoElement"><div class="innerText">${toDoElement}</div><button class="clearButton">X</button></li>`
        let everythingInList = document.querySelectorAll('.element')
        
        
        theToDoList.appendChild(listElement)
        
        let clearButton = document.querySelectorAll('.clearButton')
        const currentArray = JSON.parse(localStorage.getItem('toDoArray'))
        clearButton.forEach((element, num)=> {
            element.addEventListener('click', function(){
            const index = Array.prototype.indexOf.call(everythingInList, this.parentNode);
            currentArray.splice(index,1)
            element.parentNode.remove()
            localStorage.setItem('toDoArray', JSON.stringify(currentArray))
            console.log(currentArray);
            
            })
        })
        
        let textClick = document.querySelectorAll('.innerText')
        let isClicked = false
        textClick.forEach((element)=>{
            element.addEventListener('click', function(){
                if(isClicked==false){
                element.style.textDecoration='line-through'
                isClicked=true
                }else{
                element.style.textDecoration='none'
                isClicked=false
                }
            })
        })
        
        let deleteBox = document.querySelector('#deleteBox')
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteButton')
        deleteButton.innerHTML='delete'
       
     

    }
    
    

