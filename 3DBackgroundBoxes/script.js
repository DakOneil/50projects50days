const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

const w = boxesContainer.offsetWidth;
const h = boxesContainer.offsetHeight;

// const numberOfBoxes = prompt("How many squares wide and tall should it split into??");

btn.addEventListener('click', () => {
    boxesContainer.classList.toggle('big')
});


function createBoxes() {
    for (let i = 0 ; i < 4 ; i++) {
        for (let j = 0 ; j < 4 ; j++) {
            const box = document.createElement('div');

            box.classList.add('box');

            box.style.backgroundPosition = `${-j * w/4}px ${-i * w/4}px`
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();