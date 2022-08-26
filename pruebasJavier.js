//Recuperar Imagen con Nombre

const app = document.getElementById('app');

function getInfoFromCharacters() {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(function (response) {
            return response.json();
        })
}

function getSingleCharacter(name) {
    getInfoFromCharacters()
        .then(function (data) {
            for (const character of data.results) {
                if (character.name.includes(name)) {
                    const img = document.createElement('img')
                    img.src = character.image
                    app.appendChild(img)
                    const p = document.createElement('p')
                    p.textContent = character.name
                    app.appendChild(p)
                }
            }
        })
}
getSingleCharacter('Rick Sanchez')

