// const catresults = document.getElementById('catresults');
const dogresults = document.getElementById('dogresults');
// const catbutton  = document.getElementById('catbutton');
const dogbutton  = document.getElementById('dogbutton');

// catbutton.addEventListener('click',getRandomCat)
dogbutton.addEventListener('click',getRandomDog)

// function getRandomCat(){
//     fetch('https://aws.random.cat/meow')
//     .then(res => res.json())
//   .then(data => {
//       catresults.innerHTML = `<img src=${data.file}
//       alta="cat"/>`;
//   });
// }

function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
  .then(data => {
      console.log(data)
      dogresults.innerHTML = `<img src=${data.url}
      alt="dog"/>`;
  });
}


