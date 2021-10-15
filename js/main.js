document.querySelector('button').addEventListener('click',searchTheScripture)

function searchTheScripture() {
  let book = document.querySelector('.book').value
  let chapter = document.querySelector('.chapter').value
  let verse = `:${document.querySelector('.verse').value}`
  const url = `https://bible-api.com/${book} ${chapter}${verse}?translation=kjv`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h4').innerText = data.reference
    document.querySelector('p').innerText = data.text
  })
}
