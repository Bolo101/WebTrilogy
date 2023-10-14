let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count ++;
    countEL.textContent = count;
}

function save(){
    let payload = count + " - ";
    saveEl.textContent += payload;
    count = 0;
    countEL.textContent = 0;
}

