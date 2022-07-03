const form = document.querySelector("#fo");
const input = form.querySelector("input");
const listPlace=document.querySelector("#list");
let local=[];
function saveLocal(item)
{
    localStorage.setItem("toDo",JSON.stringify(local));
}
function erase(item){
    const list = item.target.parentElement;
    item.preventDefault();
    list.remove();
    local=local.filter((id)=>(id.id!==Number(list.id)));
    saveLocal();
}
function printList(item)
{
    const todos = document.createElement("li");
    todos.innerText=item.text;
    todos.id=item.id
    listPlace.appendChild(todos);
    const button = document.createElement("button");
    button.innerText = "X";
    todos.appendChild(button);
    button.addEventListener("click",erase);
    console.log("print")
}
function addList(event)
{
    event.preventDefault();
    const todo= 
    {
        text:input.value,
        id:Date.now()
    }
    local.push(todo);
    saveLocal(todo);
    printList(todo);
    input.value="";
}
if(localStorage.getItem("toDo"))
{
    local=JSON.parse(localStorage.getItem("toDo"));
    local.forEach(printList);
    console.log(local);
}
form.addEventListener("submit",addList);