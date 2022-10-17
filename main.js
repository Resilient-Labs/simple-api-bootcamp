document.getElementById("btn").addEventListener("click",start)


function start(){
    fetch("http://www.boredapi.com/api/activity/") 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
        document.getElementById("activity").innerHTML = data.activity
        
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}

