function getInfo(){
    fetch('https://gnews.io/api/v4/search?q=example&token=23f01ef0c4b4e5150c7294718a3b2549')
    .then(res => res.json())
    .then(data => {
        
        for(let i = 0 ; i < data.articles.length; i++){
             console.log(data.articles[1].title)
         }
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
    getInfo()

    