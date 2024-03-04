let allTodos = []
function addTodo(){
    let input1 = document.getElementById('todo').value 
    let input2 = document.getElementById('desc').value 
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    // console.log(input1, input2);
    if(input1 == '' || input2 == ''){
        showError.style.display= 'block'
        allButtons.style.display  = 'none'
    }else{
        showError.style.display= 'none'
        showNoTodo.style.display= 'none'
        allButtons.style.display  = 'block'
        let todoObj = {
            todo: input1,
            desc: input2,
            date,
            time

        }
        allTodos.push(todoObj)
        console.log(allTodos);

        displayTodo()
    }
}
function deLast(){
    allTodos.pop()
    displayTodo()

}
function deFirst(){
    allTodos.shift()
    displayTodo()

}
function addStart(){
    let newElement1 = prompt('add input1')
    let newElement2 = prompt('add input2')
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    if(newElement1 == '' || newElement2 == ''){
    alert('Add element to both')
    } else{
        let todoObj = {
            todo: newElement1,
            desc: newElement2,
            date,
            time

        }
        allTodos.unshift(todoObj)
        displayTodo()

       
    }

    
}
function deAny() {
    let collectedNumber =  Number(prompt('insert number'))
    console.log(collectedNumber);
    if(collectedNumber > allTodos.length){
    alert('maximum number exceeded')
    }else{
        allTodos.splice(collectedNumber-1,1)
        displayTodo()
    }

    
}
function editAny(){
    let editElement = Number(prompt('which element do you want to edit'))
   
    if(editElement > allTodos.length ){
    alert('insert element')
    }else{
        let newElement1 = prompt('add input1')
        let newElement2 = prompt('add input2')
        let date = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString()
      
        let todoObj = {
            todo: newElement1,
            desc: newElement2,
            date,
            time

        }
        allTodos.splice(editElement-1,1,todoObj)
        console.log(allTodos)   
        displayTodo()
    
    }
}
function deAll(){
    allTodos.splice(0,allTodos.length)
    displayTodo()
}

function displayTodo() {
    show.innerHTML = ''
    for (let i = 0; i < allTodos.length; i++) {
        let showedTodo = allTodos[i].todo;
        let showedDesc = allTodos[i].desc;
        let showedDate = allTodos[i].date;
        let showedTime = allTodos[i].time;
        
        show.innerHTML += `
        <div class="p-3 shadow my-4">
            <div>${i+1}</div>
            <h3>${showedTodo}</h3>
            <h5>${showedDesc}</h5>
            <small>${showedDate}, ${showedTime}</small>
        </div>
    `
        
    }
    
}