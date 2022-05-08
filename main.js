//The user will enter a search term for book topics and  will receive a list of 5 top
// books on the subject, according to google books API 
// podcast API : https://www.listennotes.com/listen/ 

document.querySelector('button').addEventListener('click',getBookRec)


function getBookRec(){
  let textValue = document.querySelector('input').value

  // let url1 = `https://api.nytimes.com/svc/books/v3&description&title/lists/overview/${textValue}.json?api-key=ozKcEdW7bCmDEi4Dq0Y9ZXWUTRVU7281`
  //key: ozKcEdW7bCmDEi4Dq0Y9ZXWUTRVU7281
  ///lists/overview.json/get 

 let url1= `https://books.googleapis.com/books/v1/volumes?q=${textValue}+subject:${textValue}&maxResults=5&key=AIzaSyAwes8-Lei6awfqGqI73seerernPxNrNd8`  

// let url2 =``

  //key: AIzaSyAwes8-Lei6awfqGqI73seerernPxNrNd8 



fetch(url1)
//res= result ---> parse it into JSON syntax ( parse response as JSON)
.then(res => res.json())
// data ---> pass the data retrieved into the function 
.then(data =>{
  console.log(data.items[3].volumeInfo.description)

     document.querySelector('.title').innerText=data.items[0].volumeInfo.title
     document.querySelector('.snippet').innerText=data.items[0].searchInfo.textSnippet
     document.querySelector('.category').innerText=data.items[0].volumeInfo.categories[0]
    //  document.querySelector('.description').innerText=data.items[0].volumeInfo.description
     document.querySelector('.img').src=data.items[0].volumeInfo.imageLinks.thumbnail
   

     document.querySelector('.titleOne').innerText=data.items[1].volumeInfo.title
     document.querySelector('.snippetOne').innerText=data.items[1].searchInfo.textSnippet
     document.querySelector('.categoryOne').innerText=data.items[1].volumeInfo.categories[0]
    document.querySelector('.img-one').src= data.items[1].volumeInfo.imageLinks.thumbnail
  
     document.querySelector('.titleTwo').innerText=data.items[2].volumeInfo.title
     document.querySelector('.snippetTwo').innerText=data.items[2].searchInfo.textSnippet
     document.querySelector('.categoryTwo').innerText=data.items[2].volumeInfo.categories[0]
    document.querySelector('.img-two').src= data.items[2].volumeInfo.imageLinks.thumbnail

    document.querySelector('.titleThree').innerText=data.items[3].volumeInfo.title
     document.querySelector('.snippetThree').innerText=data.items[3].searchInfo.textSnippet
     document.querySelector('.categoryThree').innerText=data.items[3].volumeInfo.categories[0]
  document.querySelector('.img-three').src=data.items[3].volumeInfo.imageLinks.thumbnail

  document.querySelector('.titleFour').innerText=data.items[4].volumeInfo.title
  document.querySelector('.snippetFour').innerText=data.items[4].searchInfo.textSnippet
  document.querySelector('.categoryFour').innerText=data.items[4].volumeInfo.categories[0]
  document.querySelector('.img-four').src= data.items[4].volumeInfo.imageLinks.thumbnail
})

.catch(err =>{
  console.log(`error ${err}`)
})
}