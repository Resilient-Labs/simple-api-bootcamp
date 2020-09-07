document.querySelector('button').addEventListener('click', function () {
fetch(`https://www.boredapi.com/api/activity/`)
  .then(response => response.json())
  // handle the response
  .then(data => {
    let participants = data.participants
    document.getElementById('activity').innerHTML=data.activity
    document.getElementById('type').innerHTML= data.type.charAt(0).toUpperCase() + data.type.slice(1)
    document.getElementById('participants').innerHTML= `Participants needed: ${participants}`
    console.log(data)


})

    .catch(error => {
      // handle the error
    });
})
