let addtodobutton = document.querySelector(".add-todo");
let todoInput= document.querySelector(".todo-input")

// todoInput.addEventListener("keypress" , function(e){
//     if(e.key=="Enter"){
//         let todoInputValue= todoInput.value
//         console.log(todoInputValue); 
//         todoInput.value=""
//     }
// })

// addtodobutton.addEventListener("click" , function(event){
    // console.log(event)
    // let todoInputValue= todoInput.value
    // if(todoInputValue){
    //     console.log(todoInputValue)
    //     todoInput.value= "";
    // }
// })
todoInput.addEventListener("keypress" ,function(e){
    if(e.key=="Enter"){
        addTodo()
    }
})
addtodobutton.addEventListener("click" ,function(){
    addTodo();
})
function addTodo(e){
    let todoInputValue= todoInput.value;
    if(todoInputValue){
        console.log(todoInputValue)
        todoInput.value=""
    }
}
