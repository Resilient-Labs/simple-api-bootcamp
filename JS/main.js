//get a cat photo from the catapi.com and put the photo in the dom
fetch('https://api.thecatapi.com/v1/images/search?api_key=live_9X3p0sAVnlCPYLh0F4YFD5LfsgWnq0MC1SL93ko4MGHiucdZiMzHghHa6f9ROzvK')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url
    })
    .catch(err => {
        console.log('error ${err}')
    })