// fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=bBlxIrVPYmLuvTFrCWazLD585wcSPE7Y")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//       // console.log(response)
//       document.querySelector("img").src = response._embedded.events[10].images[0].url
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });
const btn = document.querySelector("button")

btn.addEventListener('click', ()=>{

const apikey= "bBlxIrVPYmLuvTFrCWazLD585wcSPE7Y"
let city = document.querySelector(".city").value
fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${apikey}&city=${city}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // document.querySelector("img").src = response._embedded.events[10].images[0].url
      // document.querySelector("answers").src = response._embedded.events
      // console.log(response._embedded.events)
      response._embedded.events.forEach(function(x){
        let li= document.createElement("li");
        let text = document.createTextNode(x.name);
        li.appendChild(text);
        document.querySelector(".theList").appendChild(li);
      })

    })
    .catch(err => {
        //console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
  })
