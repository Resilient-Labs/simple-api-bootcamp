
//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getPlayerStats)

function getPlayerStats(){

    // this takes the user input and stores it into the variable selection
    const selection = document.querySelector('input').value
    
    // we then store the url with the temporal literal selection variable holding the user input in another variable called url
    // using ball dont lie api
    const url = `https://www.balldontlie.io/api/v1/players?search=${selection}`

    // we then fetch data from the url
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        //here we access the data first name and last name and display it in our h2 
        document.querySelector('h2').innerText = `Player: ${data.data[0].first_name} ${data.data[0].last_name}`

        //here we access the data team full name and display it in our h3
        document.querySelector('h3').innerText = `Team: ${data.data[0].team.full_name}`

        //here we access the data position and display it in our h4
        document.querySelector('h4').innerText = `Position: ${data.data[0].position}`

        //we then create a variable to store the height and weight data 
        const heightAndWeight = `Height: ${data.data[0].height_feet}'${data.data[0].height_inches} Weight: ${data.data[0].weight_pounds}`

        //and then display the variable in h5
        document.querySelector('h5').innerText = heightAndWeight
    })
    //error catcher
    .catch(err => {
        console.log(`error ${err}`)
});
}
    
