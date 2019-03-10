document.querySelector("button").addEventListener("click", newDog);

function newDog(e) {
  e.preventDefault();
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response);
      document.querySelector("img").src = response.message;
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("no doggie, doggie");
    });
}
