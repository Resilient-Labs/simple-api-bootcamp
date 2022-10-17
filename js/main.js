

//listener
document.querySelector("#submit").addEventListener("click", userInput);
//
let character = document.querySelector(".bb-name")
let nickname = document.querySelector(".bb-nickname")
let image = document.querySelector(".bb-image")
let occupation = document.querySelector(".bb-occupation")
let charStatus = document.querySelector(".bb-status")

//gets date and 
function userInput(event) {
    //stops refreshing on submit, Shout on Leon
    event.preventDefault()
    //I am grabbing the user input date
 

    //fetching and not api needed
    fetch("https://www.breakingbadapi.com/api/character/random")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        character.innerHTML = data[0].name
        nickname.innerHTML = data[0].nickname
        image.src = data[0].img
        occupation.innerHTML = data[0].occupation
        charStatus.innerHTML =  data[0].status

        // document.querySelector(".director") = data.director
        
        // displayPicture(data)
    })


}