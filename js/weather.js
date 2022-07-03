const api = "45fe3a23c3fad549a661fbc0df0ad6be"

function ok(event)
{
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${event.coords.latitude}&lon=${event.coords.longitude}&appid=${api}&units=metric`
    console.log(url);
    fetch(url)
    .then((response)=>response.json())
    .then(data=>
        {
            const name = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:last-child");
             
            name.innerText=data.name;
            temp.innerText=data.main.temp;
        })
}
function error()
{
    console.log("error");
}
navigator.geolocation.getCurrentPosition(ok,error)