const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
const navBoxes = document.querySelectorAll('.nav');
const projHeader = document.querySelector('.projectHeader');

openBtn.addEventListener('click', () => {
    navBoxes.forEach((n, idx) => {
        n.classList.add('visible');
    })
    openBtn.classList.add('hidden');
    projHeader.classList.add('shiftMargin');
})

closeBtn.addEventListener('click', () => {
    navBoxes.forEach((n, idx) => {
        n.classList.remove('visible');
    })
    closeBtn.classList.remove('hidden');
    projHeader.classList.remove('shiftMargin');
})