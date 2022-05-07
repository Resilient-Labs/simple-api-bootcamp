document.querySelector("button").addEventListener("click", search);

function search() {
  const objectId = document.getElementById("int").value;
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
  const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`

  fetch(objectUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("img").src = data.primaryImage
        const artist = `By: ${data.artistDisplayName}`
        document.querySelector("h2").innerText = artist
        const object = `Item: ${data.objectName}`
        document.querySelector("h3").innerText = object
        const culture = `Culture: ${data.culture} `
        document.querySelector("h4").innerText = culture
        const state = data.state
        const city = data.city
        const location = `Origin: ${city}, ${state}`
        document.querySelector("h5").innerText = location

      })
      .catch(err => {
          console.log(`error ${err}`)
  });
 }
