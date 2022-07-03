
function setTime(){
   
const time = new Date();
const hour = String(time.getHours()).padStart(2,"0");
const min = String(time.getMinutes()).padStart(2,"0");
const sec = String(time.getSeconds()).padStart(2,"0");
const timeOnScreen = document.querySelector("#clock");
timeOnScreen.innerText = `${hour}:${min}:${sec}`;
}
setTime();
setInterval(setTime, 1000);

