// https://api.api-ninjas.com/v1/dadjokes?limit=  2
// sample request url

//user needs to enter a number for X amount of jokes & they need to be limited to under 10 *scrapped was working but ran into issue where i could not create a new element per joke maybe go back into the to-do list to see* 
//Might have to refer to to-do-list to create new elements when jokes are listed


document.querySelector('button').addEventListener('click', joke)

function joke(){
    console.log('working joke function test')

    // let funny = document.querySelector('input').value
    // console.log(funny)

    let apiKey = 'GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f'
    // console.log(apiKey)

    // let userSelect = funny

    // let maxLimit = 10
    // console.log(maxLimit)
                            //user to set a limit for how many jokes
    // if(userSelect > maxLimit){
    //     userSelect = maxLimit;
    // }
    // userSelect = userSelect <= limit ? userSelect : limit;
    // console.log(userSelect)

    let url = `https://api.api-ninjas.com/v1/dadjokes?limit=`;
    // console.log(url)
    

    // let url = `https://api.api-ninjas.com/v1/dadjokes?limit=${funny}&funny=${limit}`;

    fetch(url, {
        method: 'GET', //Fetch do be fetching 
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            const jokeContent = result[0].joke
            document.querySelector('#joke-content').textContent = jokeContent;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    
    
      }



      
// Example 2 jokes
// [
//     {
//       "joke": "What sounds like a sneeze and is made of leather? A shoe."
//     },
//     {
//       "joke": "How do you make a tissue dance? Put a little boogie in it!"
//     }
//   ]


//Example is written in Ajax refer to weatherAPI to rewrite it using fetch

// var limit = 3
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });







