const input = document.querySelector('input');
let amount;
let oneBox;
input.addEventListener("change", amountChange);
function amountChange() {
    amount = input.value;
}

const box = document.querySelector('div#boxes');
box.style.display = "flex";
box.style.alignItems = "center";
box.style.flexWrap = "wrap";


const btnAdd = document.querySelector('[data-action="render"]');
btnAdd.addEventListener("click", createBoxes);

function createBoxes() {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
        let addition = document.createElement('div');
        box.appendChild(addition)
    }
    const boxes = box.querySelectorAll('div');
    let size = 30;
    boxes.forEach(function (element) {
        element.style.width = size + "px";
        element.style.height = size + "px";
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        element.style.backgroundColor = bgColor;
        size = size + 10;
    })
}

const btnDelete = document.querySelector('[data-action="destroy"]');
btnDelete.addEventListener("click", destroyBoxes)


function destroyBoxes() {
    
    const allBoxes = box.querySelectorAll("div");
    allBoxes.forEach(function () {
        oneBox = box.querySelector("div");
        box.removeChild(oneBox)
    } )
        
}