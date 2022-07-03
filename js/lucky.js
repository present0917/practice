const color = [
    "red","orange","yellow","green","blue","purple"
];
const lucky = document.querySelector("#lucky");
lucky.innerText = `Today's lucky color is ${color[Math.floor(Math.random()*color.length)]}`
