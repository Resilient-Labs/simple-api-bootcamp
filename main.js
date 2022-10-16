document.querySelector('#btn').addEventListener('click', myApi)

function myApi(){
let userInput = document.querySelector('#search').value

fetch(`https://api.giphy.com/v1/gifs/search?api_key=e74sIcuuwsvqb6JD5ba07osZ9tL4Ng9L&q=${userInput}&limit=10&offset=0&rating=g&lang=en`)
     .then(response => response.json())
     .then(data => {
          console.log(data.data)
          let result = document.querySelector('#result')
          result.innerHTML = ''
          data.data.forEach(item=> {
               result.innerHTML += `<div class="images"> <img src="${item.images.fixed_width.url}"> </div>`
          })
     })

}



