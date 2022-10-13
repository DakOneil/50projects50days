//get images from source.unsplash.com/random
//can add a size /300x300
//like this https://source.unsplash.com/random/300x300
const imagesContainer = document.querySelector('.images-container');
const unsplashURL = 'https://source.unsplash.com/random/'

getImages();

function getImages() {
    //create 15 images tags in html and then populate?
    for (let i = 1 ; i <= 15 ; i++) {
        const newImage = document.createElement('img');
        newImage.src = `${unsplashURL}${getRandomSize()}`
        newImage.alt = 'random image';
        newImage.classList.add('image');

        imagesContainer.appendChild(newImage);
    }
    //create 1 image tag at a time and populate?
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}