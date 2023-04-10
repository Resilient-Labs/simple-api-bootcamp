// VARIABLES
const emotions = document.querySelectorAll('.eButton')

// CLICK
emotions.forEach(emotion => {
    emotion.addEventListener('click', () => {
        // CONDITIONALS
        let word = emotion.innerText == '😀' ? 'happy'
            : emotion.innerText == '😔' ? 'sad'
                : emotion.innerText == '🤬' ? 'angry'
                    : emotion.innerText == '🤢' ? 'disgusted'
                        : emotion.innerText == '😱' ? 'shocked'
                            : ''

        // FETCH REQUEST
        let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=5c3146f6-fb92-401e-bd30-3799b93d29dd`
        console.log(word)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const randomIndex = Math.floor(Math.random() * data.length)
                console.log(data.length)
                let randomWord = data[randomIndex].meta.syns[Math.floor(Math.random() * data[randomIndex].meta.syns.length)]//assigns a random word based on the length of the array being fetched
                console.log(randomWord)
                if (!randomWord) {//checks for undefined or null by using a falsy method
                    document.querySelector('h2').innerText = word
                } else {
                    const randomIndex = Math.floor(Math.random() * randomWord.length)
                    document.querySelector('h2').innerText = randomWord[randomIndex] //this allows a singular index of the array to be printed to the HTML instead of the array itself
                }
            })
    })
})