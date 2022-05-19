import { Tamagotchi } from "./modules/myTamagotchi.js";

let tama = new Tamagotchi();
const img = document.querySelector('img');
const happy = new URL ('./img/happy.jpg', import.meta.url);
const angry = new URL ('./img/angry.jpg', import.meta.url);
const dead = new URL ('./img/dead.jpg', import.meta.url);
let intervalID =0;

img.src = happy.href;



const btn = document.getElementById('enterName');
btn.addEventListener('click', setName)

function setName(){
    const TamagotchiName = document.querySelector('input').value;
    document.getElementById('name').innerText = 'Tamagotchi Name: ' + TamagotchiName;
    
    start();
    
}
const feedBtn = document.getElementById('feed');
feedBtn.addEventListener('click', ()=>{
    document.getElementById('feedBar').innerText = 'Hunger: ' + tama.setTimeUp();
    if(tama.getTimeUp() <= 0){
        console.log("gettimeup = 0")
        tama.adjustTimeUp();
    }
});
const playBtn = document.getElementById('play');
playBtn.addEventListener('click', ()=>{
    document.getElementById('happinessBar').innerText = 'Happiness: ' + tama.setTimeDown();
    if(tama.getTimeDown() >= 10){
        console.log("gettimedown = 10")
        tama.adjustTimeDown();
    }
});

function start(){
    intervalID = setInterval(update, 2200);
}

function update(){
    let cstate = tama.getState();
    if (cstate === "ARG") {
        img.src = angry.href;
    }
    if (cstate === "GLAD") {
        img.src = happy.href;
    }
    
    if(tama.getTimeDown() == 0 || tama.getTimeUp() == 10) { 
        clearInterval(intervalID);
        img.src = dead.href;
    }
}

