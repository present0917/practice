const img = document.createElement("img");
const num = Math.floor(Math.random()*4)
const rnd = document.querySelector("#rndImg");
img.src = `${num}.jpg`;
rnd.appendChild(img);
