document.querySelector('button').addEventListener('click', getMenu)

function getMenu() {
  let inputVal = encodeURIComponent(document.querySelector('input').value)

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee382a64a94ea3a8a888d6f40e35e2&query=${inputVal}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      for (let i = 0; i < data.results.length; i++) {
        let listItem = document.createElement('li')
        let textItem = document.createTextNode(data.results[i].title)
        listItem.appendChild(textItem)
        document.getElementById('titles').appendChild(listItem)
      }
    })
}
