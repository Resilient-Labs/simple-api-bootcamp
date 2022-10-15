// bored? get suggestions of something to do
document.querySelector('.button').addEventListener('click', getFetch)

function getFetch(){
    const bored = document.querySelector('input').value
    console.log(bored)
    const url = `https://www.boredapi.com/api/activity/${bored}`
   
    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            document.querySelector('p').innerText = response.activity
        })
        .catch(err => console.error(err))
    };
