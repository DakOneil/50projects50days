const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.profile');
const username = document.querySelector('.name');
const role = document.querySelector('.title');

const author = document.querySelector('.author-container');
const jobs = ['Construction Millwright', 'Residential Building Inspector', 'Title Officer', 'Tire Technician', 'School Photographer', 'Cartographic Aide', 'Pulmonary Physician', 'Road Patcher', 'Motor Coach Tour Operator', 'Optometry Professor', 'Multimedia Artist', 'Onyx-Chip Terrazzo Worker', 'Furnace Fitter', 'Pet Groomer', 'Cardiac Monitor Technician']

function getRandomJob() {
    let randomNumber = Math.floor(Math.random() * jobs.length);
    return jobs[randomNumber];
}

async function getData() {
    //get a random user from one api
    const userRes = await fetch('https://randomuser.me/api');
    const userResult = await userRes.json();

    //get a random testimonial from a different api
    let randomNumber = Math.ceil(Math.random() * 10)
    const testimonialRes = await fetch(`https://testimonialapi.toolcarton.com/api/${randomNumber}`);
    const testimonialResult = await testimonialRes.json();

    //get random job from the array above, didn't find a simple api that would create a random job. Maybe I should make one?
    const job = getRandomJob();

    testimonial.innerHTML = `${testimonialResult.message}`

    author.innerHTML = `
        <img src="${userResult.results[0].picture.large}" alt="" class="profile">
        <div class="author-details">
            <span class="name">${userResult.results[0].name.first} ${userResult.results[0].name.last}</span>
            <span class="title">${job}</span>
        </div>
    `
}
getData();
setInterval(getData, 5000);