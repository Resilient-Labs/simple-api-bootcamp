//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

function findCrime (){
    // let crime = document.querySelector('.state').value
    // let country = document.querySelector('.country').value
    const apiKey ="yhhmeTeAFZEOIIVRmq8TK88cy0XBdvANXbaxiM0a"
    const url =`https://api.usa.gov/crime/fbi/sapi/apikey=${apiKey}`

    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            document.querySelector('h3').innerText = ` ${data}`
        })

        .catch(err => {
            
            console.log('error ${err}');
        });
}
    //Event Listner
    document.querySelector('button').addEventListener('click', findCrime)
    document.querySelector('input').addEventListener('keypress', findCrime)


// "https://api.openweathermap.org/data/2.5/weather?q=${val}&units=imperial&appid=c4cab5506a3bc2466779e827dc0ccf34"

// c4cab5506a3bc2466779e827dc0ccf34



// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=pittsburgh&units=imperial&appid=c4cab5506a3bc2466779e827dc0ccf34", function(data){
//     console.log(data)
     

//     });