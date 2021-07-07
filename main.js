let lat,lng,date;
document.querySelector("button").onclick = () => {
  lat = document.getElementById("lat").value;
  lng = document.getElementById("lng").value;
  date = document.getElementById("date").value;
  console.log(typeof lat,typeof lng, typeof date);
  if(typeof lat =="string"&& typeof lng =="string"&& typeof date=="string"){
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`)
      .then(res => res.json())
      .then(res =>{
        document.querySelector(".first").textContent= res.results.sunrise;
        document.querySelector(".second").textContent= res.results.sunset;
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert('sorry, there are no results for your search');
      });
  }
};
