document.querySelector('form').addEventListener('submit', ticketmaster)

function ticketmaster(e) {
  e.preventDefault()
  var city = document.querySelector('input').value
  var apikey = "91QSY1UDMtcfvWqQF1WK08mq17uIANAb"
  fetch(`https://app.ticketmaster.com//discovery/v2/events.json?size=10&apikey=91QSY1UDMtcfvWqQF1WK08mq17uIANAb&keyword=${city}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        document.querySelector('ul').innerHTML = "Sorry, no events found"
          // document.querySelector('events').value = response.hdurl
          document.querySelector('ul').innerHTML = response._embedded.events.map (event => `<li>${event.name}, ${event.dates.start.localDate}, ${event._embedded.venues[0].city.name}</li>`).join('');
          if (document.querySelector('ul').innerHTML === '') {

          }

          // response._embedded.events.filter(event => (event._embedded.venues[0].city.name === city))
          // // .map(event => `<li>${event.name}</li>`)
          //
          // response._embedded.events.map(event => `<li>${event.name}</li>`);
        });
    }
// ticketmaster()
