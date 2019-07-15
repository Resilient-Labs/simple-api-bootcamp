window.addEventListener('load',() => {
  let api = "https://official-joke-api.appspot.com/random_joke"
  fetch(api)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    insertText(response.setup,response.punchline)
    })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  })
});

function insertText(setUpText,punchLineText) {
  var setUp = document.getElementById('setUp')
  var punchLine = document.getElementById('punchLine')
  var text = document.createTextNode(setUpText)
  var punchText = document.createTextNode(punchLineText)
  setUp.appendChild(text)
  punchLine.appendChild(punchText)
}

document.getElementById('no').addEventListener('click',() => {
  document.getElementById('setUp').innerHTML = ""
  document.getElementById('punchLine').innerHTML = ""
  let api = "https://official-joke-api.appspot.com/random_joke"
  fetch(api)
  .then(res => res.json())
  .then(response => {
    insertText(response.setup,response.punchline)
    })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  })
  });
