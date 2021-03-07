document.querySelector('button').addEventListener('click', getGif)

document.querySelector('input').addEventListener('keypress', runGetGif)

function runGetGif(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getGif()
    }
    
}


function getGif() {

    let searchKeyword = document.querySelector('input').value

    let url = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&limit=3&api_key=rZERWEsWposI7vvVVi7RoMV7zSQdLSs3`

    fetch(url)

        .then(response => response.json())

        .then(data => {

            console.log(data);
            
            document.querySelector('#imgphoto1').src = data.data[0].images.original.url

            document.querySelector('#imgphoto2').src = data.data[1].images.original.url

            document.querySelector('#imgphoto3').src = data.data[2].images.original.url

        })

        .catch(err => {
            console.log(`error ${err}`)
        });


}

