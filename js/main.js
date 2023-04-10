// Goal: Display data returned from an api

// worked on this with Michael Kazin

const getAvatarBtn = document.querySelector('#getAvatarBtn')
const characterImage = document.querySelector('#characterImage')
let characterName = document.querySelector('h1')
let imageError = document.querySelector('#imageError')


function getAvatarCharacter() {

    const url = `https://last-airbender-api.fly.dev/api/v1/characters/random`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(characterData => {
            // console.log(characterData[0].photoUrl)
            console.log(characterData[0].name)

            let characterImageURL = characterData[0].photoUrl

            if (characterImageURL === undefined) {
                displayImageError()
            } else {
                characterImage.src = characterImageURL
                characterImage.classList.remove('hidden')
                imageError.classList.add('hidden')
            }

            characterName.innerText = characterData[0].name

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

function displayImageError() {
    // document.getElementById("imageError").innerText = "The image could not be loaded. (That's rough, buddy.)";
    characterImage.classList.add('hidden')
    imageError.classList.remove('hidden')
}

getAvatarBtn.addEventListener("click", getAvatarCharacter)