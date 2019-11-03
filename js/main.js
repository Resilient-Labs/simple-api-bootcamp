// const key = "0d5c6d62a041b927840f91428e5facad77ada178c38ed934"

let btn = document.querySelector("button")


btn.addEventListener("click", ()=>{

  let inputOne = document.querySelector("#convert").value
  let convert = inputOne.toUpperCase()
  let inputTwo = document.querySelector("#base").value
  let base = inputTwo.toUpperCase()
fetch(`https://api.ratesapi.io/api/latest?base=${base}&symbols=${convert}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    // let rates = response.rates
    console.log(response)
    let output=response.rates[convert]
    let result = document.querySelector('p').innerHTML=output




  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
})
