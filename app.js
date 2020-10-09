const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
const jokeImg = document.querySelector('.container img');
const jokeTime = document.querySelector('.container .temp');

document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeImg.src = jokeObj.icon_url;
    jokeText.innerHTML = jokeObj.value;
    jokeTime.innerHTML = jokeObj.created_at.substr(0, 19);
};