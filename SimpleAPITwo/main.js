// Display data returned from an api 


document.querySelector("button").addEventListener("click", findWord);



function findWord() {
    let inputValue = document.querySelector('input').value
    let definition = document.querySelector('h2')
    let noun = document.querySelector('h3')
    let audio = document.querySelector('audio')
    let phoneticText = document.querySelector('h4')

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
        
        noun.innerText = `Part of Speech: ${data[i].meanings[0].partOfSpeech}`
        definition.innerText = `Definition: ${data[i].meanings[0].definitions[0].definition}`
        audio.src = `${data[i].phonetics[0].audio}`
        phoneticText.innerText = `Phonetic Text: ${data[i].phonetics[1].text}`
        debugger
        }

    
       console.log(data)
    })
    .catch((err) => {
        console.log(`err ${err}`)
    });

    // need conditional statement to return error if it is not a word to be found
    // need conditional statement to change audio to another index if the first one does not have one

}
