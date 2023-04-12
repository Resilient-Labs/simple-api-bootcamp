const butt = document.querySelector('#thebutt')
  
function Chuck(){
    const category = document.querySelector('#category').value
    const url = (`https://api.chucknorris.io/jokes/random?category=${category}`)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error == 'Not Found'){
         alert('Sorry! Word not found. Please enter a valid entry.')
      } else {
      document.querySelector('#joke').innerText = data.value
      }
    })
    .catch(err => {
      alert(`error ${err}`)
    })
    }
    
butt.addEventListener('click', Chuck)

// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     if(typeof data === 'undefined'){
//       alert('Sorry! Word not found. Please enter a valid entry.')
//     } else {
//       document.querySelector('#joke').innerText = data.value
//     }
//   });