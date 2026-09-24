
const todoList = [{
    name: 'wash dishes',
    dueDate: '2026-9-8',
},
{
    name: 'make dinner',
    dueDate: '2026-9-8'
}
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

     todoList.forEach((todoObject,index) => {
        const {name, dueDate }= todoObject;
        const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button class="delete-button" 
  
   ">Delete</button>
   `;
        todoListHTML += html;

    } )

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-button').addEventListener('click',() => {
   addList();
})
document.querySelector('.delete-button').addEventListener('click',()=> {
 todoList.splice(index ,1);
   renderTodoList();
})
function addList() {

    const input = document.querySelector('#input');
    const addValue = input.value;
    const date = document.querySelector('#date');
    const dateValue = date.value;
    todoList.push({
        name: addValue,
        dueDate: dateValue
    });
    renderTodoList();
    input.value = "";
}