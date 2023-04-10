

let ul = document.querySelector("ul")

document.querySelector("button").addEventListener("click", define)

function define(){

    ul.innerHTML=""

    let word = document.querySelector("input").value
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=c7558aed-b281-4c8f-b0eb-7d0b53cd78d1`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 

      for(let i = 0; i < data[0].shortdef.length; i++){

        let li = document.createElement("li")
        li.innerText = data[0].shortdef[i]

        ul.appendChild(li)

      }


      document.querySelector("h3").innerText = data[0].hwi.hw
      document.querySelector(".noun").innerText = `(${data[0].fl})`
      
    //   document.querySelector(".defOne").innerText = data[0].shortdef
    //   document.querySelector(".defTwo").innerText = data.shortdef[1]
    //   document.querySelector(".defThree").innerText = data.shortdef[2]



    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });


}
