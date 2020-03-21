document.getElementById("photo").innerHTML = "<img src='images/blank.png'>"

document.querySelector('button').addEventListener('click', () => {

let input = document.querySelector('select').value

      if(input === "1"){
        document.getElementById("photo").innerHTML = "<img src='images/friends.png'>"
    } else if(input === "2"){
        document.getElementById("photo").innerHTML = "<img src='images/friends2.png'>"
    } else if(input === "3"){
        document.getElementById("photo").innerHTML = "<img src='images/friends3.png'>"
    } else if(input === "4"){
        document.getElementById("photo").innerHTML = "<img src='images/friends4.png'>"
    } else if(input === "5"){
        document.getElementById("photo").innerHTML = "<img src='images/friends5.png'>"
    }

fetch(`http://www.boredapi.com/api/activity?participants=${input}`)
    .then(res => res.json())
    .then(response => {

      document.getElementById("text").textContent = response.activity
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
  })
