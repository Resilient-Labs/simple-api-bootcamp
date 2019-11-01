
const btn = document.querySelector("button")
const result = document.querySelector("#result")

btn.addEventListener('click',() =>{
const input= document.querySelector("#nameInput").value

fetch(`https://api.genderize.io?name=${input}`)
    .then(res => res.json())
    // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      const resultss = document.createTextNode(response.gender)
      result.appendChild(resultss)
      // resultss(0);
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

  })
