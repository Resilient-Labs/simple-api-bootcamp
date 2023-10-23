let dothraki = document.querySelector('#dothraki')

document.querySelector('button').addEventListener('click', translate)

function translate() {
    let english = document.querySelector('#english').value
    fetch(`https://api.funtranslations.com/translate/dothraki.json?text=${english}`)
    .then(res => res.json())
    .then(data => {
        dothraki.value = data.contents.translated
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
}