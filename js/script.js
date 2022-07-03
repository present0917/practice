const nickname = document.querySelector("#name");
const inputValue = nickname.querySelector("input");
const savedName = localStorage.getItem("name");
const hello = document.querySelector("#hello");

function localName()
{
    nickname.classList.add("hidden");
    hello.classList.remove("hidden");
    hello.innerText = `Hello ${localStorage.getItem("name")}`
}
function print(event){
    const input = inputValue.value;
    event.preventDefault();
    console.log(input);
    localStorage.setItem("name",input);
    localName();
}
nickname.addEventListener("submit",print);
if(savedName)
{
    localName();
}
