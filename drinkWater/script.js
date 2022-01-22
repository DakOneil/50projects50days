const smallCups = document.querySelectorAll('.small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const finished = document.querySelector('.finished');

updateLargeCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full')
        }
    })

    updateLargeCup();
}

function updateLargeCup() {
    const fullCups = document.querySelectorAll('.small.full').length;
    const totalCups = smallCups.length;
    const largeCupHeightElement = document.querySelector('.cup');
    const largeCupHeight = +getComputedStyle(largeCupHeightElement).height.slice(0,3);

    if(fullCups == 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${largeCupHeight * fullCups / totalCups}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }
    
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        finished.classList.remove('hidden');
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
        finished.classList.add('hidden');
    }
}