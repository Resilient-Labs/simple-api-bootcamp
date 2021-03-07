document.querySelector(".poke").addEventListener("click", getData);

function getData() {
  // let pokemon = document.querySelector("input").value;

  let apilink = `https://pokeapi.co/api/v2/pokemon/${Math.floor(
    Math.random() * 700
  )}`;

  fetch(apilink)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.species.name;
      document.querySelector(".random").src = data.sprites.front_default;
      // document.querySelector('h3').innertext = data.explanation
      // data.sprites.front_default[Math.floor(Math.random() * 100)].url;

      console.log(data);
    })
    .catch((err) => {
      console.log("error" + err);
    });
}
