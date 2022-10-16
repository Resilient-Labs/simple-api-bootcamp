//




document.querySelector('button').addEventListener('click', getNews)





function getNews() {


    const cityToSearch = document.querySelector('#cityInput').value


    //Use this for the user entering a city
    fetch(`https://api.ipgeolocation.io/astronomy?apiKey=5460c4651477432ab5753edd4498cb5d&location=${cityToSearch}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.current_time)

            document.querySelector("#moonData1").innerHTML = data.moon_altitude
            document.querySelector("#moonData2").innerHTML = data.moon_azimuth
            document.querySelector("#moonData3").innerHTML = data.moon_distance

            document.querySelector("#moonData4").innerHTML = data.moonrise
            document.querySelector("#moonData5").innerHTML = data.moonset


        })
        .catch(err => {
            console.log(`error ${err}`)

        });

}



