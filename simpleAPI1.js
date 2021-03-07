/* https://www.boredapi.com/api/activity?participants=1 */

let button = document.querySelector("button"); //selects button

    button.addEventListener("click", ()=>{
        fetch(`https://www.boredapi.com/api/activity?participants=1`) //fetch call
        .then(res => res.json()) //parse json
        .then(data => {
        console.log(data.activity) 
       document.getElementById("activity").textContent = data.activity; //displays the data into p tag in html 
     });
    });
