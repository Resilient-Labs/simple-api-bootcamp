const search=document.querySelector('.search');
search.addEventListener('click',randomFood)


  function randomFood(){
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
            console.log(response.meals[0].strMealThumb)
            console.log(response.meals[0].strInstructions)
            document.querySelector('img').src = response.meals[0].strMealThumb
            document.querySelector('#instructions').innerHTML=response.meals[0].strInstructions
            console.log(response)





          })
          .catch(err => {
              console.log(`error ${err}`)
              alert("sorry, there are no results for your search")
          });

    }
