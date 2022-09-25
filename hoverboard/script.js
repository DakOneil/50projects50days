const container = document.getElementById('container');
const randomizerSwitch = document.getElementById('switch');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

let random
const SQUARES = 500;

for (let i = 0 ; i < SQUARES ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

randomizerSwitch.addEventListener('change', (event) => {
    if (event.target.checked) {
        random = true;
    } else {
        random = false;
    }
})

function setColor(element) {
    if (random) {
        const color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color};, 0 0 10px ${color}`;
    } else {
        const color = getColorFromArray();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color};, 0 0 10px ${color}`;
    }
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getColorFromArray() {
    return colors[Math.floor(Math.random() * colors.length)];
}

console.log(randomizerSwitch.value);