// document.querySelector('button').addEventListener('click', getWeather)

// function getWeather(){
//   let inputVal = document.querySelector('#city').value
//   let inputValTwo = document.querySelector('#country').value
  const url = `https://cors.bridged.cc/https://api.edamam.com/search`
  console.log(url)
  fetch(url)

  .then(res => res.json())
  .then(data =>{
    console.log(data)
      // document.querySelector('h2').innerText = data.name
      // document.querySelector('h3').innerText = data.main.temp
      // // document.querySelector('h3').innerText = data.
  })
  .catch(err =>{
    console.log(`error${err}`)
  })
