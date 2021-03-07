
document.querySelector('button').addEventListener('click', getLyrics)
function getLyrics(){
  let inputVal = document.querySelector('.artist').value
  let inputVal2 = document.querySelector('.title').value
  const url = `https://api.lyrics.ovh/v1/${inputVal}/${inputVal2}`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data)
  document.querySelector('p').innerText = data.lyrics
   })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

















// const url = `https://official-joke-api.appspot.com/random_joke`
//
// fetch(url)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
// console.log(data)
// document.querySelector('h2').innerText = data.setup
//
//
// document.querySelector('button').addEventListener('click', viewAnswer)
//
// function viewAnswer(){
//   document.querySelector('p').innerText = data.punchline
// }
// })
// .catch(err => {
//   console.log(`error ${err}`)
// });





  // const url = `https://official-joke-api.appspot.com/random_joke`
  //
  // fetch(url)
  // .then(res => res.json()) // parse response as JSON
  // .then(data => {
  // console.log(data)
  // document.querySelector('h2').innerText = data.setup
  // setTimeout(function(){ document.querySelector('p').innerText = data.punchline; }, 6000)
  //  })
  // .catch(err => {
  //   console.log(`error ${err}`)
  // });
