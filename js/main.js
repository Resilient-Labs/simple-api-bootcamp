// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector("button").addEventListener("click", getExercise)
function getExercise(){

let muscleID = document.querySelector(".muscle").value
let equipID = document.querySelector(".equipment").value
  let url = `https://wger.de/api/v2/exercise/?&format=json&muscles=${muscleID}&equipment=${equipID}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data.results)

    // take results, iterate throught them and if they have language english print "description" to dom
    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].language === 2) {
        document.querySelector("h2").innerText= `Exercise Name: ${data.results[i].name}`
        document.querySelector("h3").innerText= `Instructions: ${data.results[i].description}`

      }
    }

  })
  .catch(err => {
    console.log(`error $(err)`)
  })
}
