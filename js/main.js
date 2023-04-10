document.querySelector('button').addEventListener('click', getNutrientialFacts)

function getNutrientialFacts(){
    let url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_rkaLt0787hquRvhIsFVISdTeG5lYQssbPEBasC7Mp1wMGKW3Tv0OmzvfXvulTMb0'
    fetch(url)
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        document.querySelector('img').src = data[0].url

    })
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}