const prices = document.querySelector('#costs')

prices.addEventListener('click', function(){

  const userBrand = document.querySelector('#userB').value
  const userProduct = document.querySelector('#userP').value


  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${userBrand}&product_type=${userProduct}`)

      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        for (let i = 0; i <= response.length; i ++){

          let picture = document.querySelector('img')

          let newStuff = document.querySelector('body')
          console.log(response)

          let theName = response[i].name
          console.log(theName)
          let thePrice = response[i].price
          let imageLinker = response[i].image_link
          console.log(imageLinker)

          let info = document.querySelector('#makeupInfo')

          info.innerHTML = `${theName} ${thePrice}`

          picture.src = `${imageLinker}`

          let textNode = document.createElement('li')
          let textImg = document.createElement('img')

          textNode.innerHTML = `${theName} ${thePrice}`

          newStuff.appendChild(textNode)

          textImg.src = `${imageLinker}`

          newStuff.appendChild(textImg)



        }


      })
      .catch(err => {
          console.log(`error ${err}`)
          console.log("sorry, there are no results for your search")
      });
})
