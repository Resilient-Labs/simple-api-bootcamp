
document.querySelector('button').addEventListener('click', countDistance)

function countDistance() {
  let startZip = encodeURIComponent(document.getElementById('start').value)
  let endZip = encodeURIComponent(document.getElementById('end').value)
  let url = `https://www.zipcodeapi.com/rest/LNZEmNGB268a9G4DOO9ZgfVfeYbhaqsKFyC7jCPmezv8IwwIr2yK8HP76A4vGX3h/distance.json/${startZip}/${endZip}/mile`
  fetch(url)
    .then(res => res.json()) // parse response as JSONabcs
    .then(data => {
      console.log(data)
      document.querySelector('#distance').innerText = data.distance
      // let getCalories = ``
      // fetch(getL)
      //   .then(res => res.json()) // parse response as JSON
      //   .then(data => {
      //       console.log(data);
      // hey I'm around
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
