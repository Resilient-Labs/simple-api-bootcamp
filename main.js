//selects div/gallery
let div = document.querySelector("div");
//variables to hold how max number of clicks/ how many pokemon in your party.
let clickCount = 0;
const maxClicks = 6;

//function that accesses the sprites from the Pokemon API
function catchThemAll() {
  let selection = document.querySelector("input").value.toLowerCase(); //search
  const url = `https://pokeapi.co/api/v2/pokemon/${selection}`; //url

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let imgId = "image" + (clickCount + 1); // create an ID for the new image element
      let img = document.getElementById(imgId); // find the image element by ID

      if (clickCount < maxClicks) {
        img.src = data.sprites.back_default; // change the image source
        clickCount++;
      } else {
        alert("Sorry, thats the max amount of buddies in your party :(");
      }

      document.querySelector("input").value = "";
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  //Add audio when you click the seach button
  const audio = new Audio("img/pokeball.mp3");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });
}

//event listeners
document.querySelector("button").addEventListener("click", catchThemAll);
