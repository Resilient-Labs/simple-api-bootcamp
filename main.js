//Create an event listener for the button so that when clicked it runs a function 
document.querySelector('button').addEventListener('click', inspireMe)


//create the inspireMe function, I want this function to pull random data from both apis and display in the DOM
function inspireMe() {

    //store the url of the first API as a value of a variable. This api should return a random quote related to programming.
    const urlA = `https://programming-quotesapi.vercel.app/api/random`

    //call the first fetch with the first url 
    fetch(urlA)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            //from the api's data return to the DOM the quote and the author of the quote
            document.querySelector('#quote').innerText = `${data.quote}`
            document.querySelector('#author').innerText = `-${data.author}`

            //store the quote div in a variable
            const qrdiv = document.querySelector('#qr')

            //add styling to the quote div when the function is called 
            qrdiv.style.backgroundColor = 'rgba(147, 195, 208, 0.95)'
            qrdiv.style.border = '3px solid rgb(104, 120, 169)'



        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })


    //store the url of the second API as a value of a variable. This api should return a random joke related to programming.
    const urlB = `https://official-joke-api.appspot.com/jokes/programming/random`

    //call the second fetch with the second url 
    fetch(urlB)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            //from the api's data return to the DOM the setup of the joke and the punchline of the joke
            document.querySelector('#joke').innerText = data[0].setup
            document.querySelector('#punchline').innerText = data[0].punchline

            //store the joke div in a variable
            const jrdiv = document.querySelector('#jr')

            //add styling to the joke div when the function is called 
            jrdiv.style.backgroundColor = 'rgba(147, 195, 208, 0.95)'
            jrdiv.style.border = '3px solid rgb(104, 120, 169)'




        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })


}