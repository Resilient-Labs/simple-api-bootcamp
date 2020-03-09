let userQuery = document.getElementById('search');
const sendDailyAdFetch = document.querySelector('#dailyButton');
const sendRandomAdFetch = document.querySelector('#randomButton')

sendRandomAdFetch.addEventListener('click', ()=> {
  fetch(`https://api.adviceslip.com/advice`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
          let realResponse = document.createElement('p');
          realResponse.innerText = response.slip.advice;
          document.querySelector('#adviceBox').appendChild(realResponse);
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})
