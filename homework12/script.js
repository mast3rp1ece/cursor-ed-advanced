let characterButton = document.getElementById('characterButton');
let planetButton = document.getElementById('planetButton');
let nextButton = document.getElementById('nextButton');
let characterList = document.getElementById('characterList');
let planetList = document.getElementById('planetList');
let nextPlanetsPage = 1;

characterButton.addEventListener('click', getCharacters);
planetButton.addEventListener('click', getPlanets);
nextButton.addEventListener('click', getNextPlanets);

function getCharacters() {
    fetch('https://swapi.dev/api/films/2/')
        .then(response => response.json())
        .then(data => {
            let characters = data.characters.slice(0, 5);
            characterList.innerHTML = '';
            characters.forEach(characterUrl => {
                fetch(characterUrl)
                    .then(response => response.json())
                    .then(characterData => {
                        let listItem = document.createElement('li');
                        listItem.classList.add('character-list-item');
                        let name = document.createElement('p');
                        name.classList.add('character-name');
                        name.textContent = characterData.name;
                        let birthYear = document.createElement('p');
                        birthYear.classList.add('character-details');
                        birthYear.textContent = 'Birth Year: ' + characterData.birth_year;
                        let genderIcon = document.createElement('img');
                        genderIcon.classList.add('gender-icon');
                        if (characterData.gender === 'male') {
                            genderIcon.src = 'images/male.png';
                            genderIcon.alt = 'Male';
                        } else if (characterData.gender === 'female') {
                            genderIcon.src = 'images/female.png';
                            genderIcon.alt = 'Female';
                        } else {
                            genderIcon.src = 'images/other.png';
                            genderIcon.alt = 'Other';
                        }
                        let gender = document.createElement('p');
                        gender.classList.add('character-details');
                        gender.appendChild(genderIcon);
                        listItem.appendChild(name);
                        listItem.appendChild(birthYear);
                        listItem.appendChild(gender);
                        characterList.appendChild(listItem);
                    });
            });
        });
}

async function getPlanets() {
    try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        const planets = data.results;
        planetList.innerHTML = '';
        planets.forEach(planet => {
            let listItem = document.createElement('li');
            listItem.classList.add('planet-list-item');
            listItem.textContent = planet.name;
            planetList.appendChild(listItem);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

async function getNextPlanets() {
    try {
        const response = await fetch(`https://swapi.dev/api/planets/?page=${nextPlanetsPage}`);
        const data = await response.json();
        const planets = data.results;
        planetList.innerHTML = '';
        planets.forEach(planet => {
            let listItem = document.createElement('li');
            listItem.classList.add('planet-list-item');
            listItem.textContent = planet.name;
            planetList.appendChild(listItem);
        });
        nextPlanetsPage++;
    } catch (error) {
        console.log('Error:', error);
    }
}
