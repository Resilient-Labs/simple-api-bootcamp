let inputText = document.querySelector('#button').addEventListener('click', getWord)

function getWord(){
    const searchMe = document.querySelector('#input').value
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchMe}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#title").innerText = data[0].word
        document.querySelector("#pronounce").innerText = `Pronouncation: ${data[0].phonetic}`
        document.querySelector("#origin").innerText = `Origin: ${data[0].origin}`
        document.querySelector("#definition").innerText = `Defintion: ${data[0].meanings[0].definitions[0].definition}`
        document.querySelector("#example").innerText = `Example: ${data[0].meanings[0].definitions[0].example}`
    })
}