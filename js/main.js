function getGrub(){
    let selection= document.querySelector('#meal').value 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${selection}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('span').innerText= `${data.meals[0].strIngredient1} ${data.meals[0].strMeasure1}
      ${data.meals[0].strIngredient2} ${data.meals[0].strMeasure2}
      ${data.meals[0].strIngredient3} ${data.meals[0].strMeasure3}
      ${data.meals[0].strIngredient4} ${data.meals[0].strMeasure4}
      ${data.meals[0].strIngredient5} ${data.meals[0].strMeasure5}
      ${data.meals[0].strIngredient6} ${data.meals[0].strMeasure6}
      ${data.meals[0].strIngredient7} ${data.meals[0].strMeasure7}
      ${data.meals[0].strIngredient8} ${data.meals[0].strMeasure8}
      ${data.meals[0].strIngredient9} ${data.meals[0].strMeasure9}
      ${data.meals[0].strIngredient10} ${data.meals[0].strMeasure10}
      ${data.meals[0].strIngredient11} ${data.meals[0].strMeasure11}
      ${data.meals[0].strIngredient12} ${data.meals[0].strMeasure12}
      ${data.meals[0].strIngredient13} ${data.meals[0].strMeasure13}
      ${data.meals[0].strIngredient14} ${data.meals[0].strMeasure14}
      ${data.meals[0].strIngredient15} ${data.meals[0].strMeasure15}
      ${data.meals[0].strIngredient16} ${data.meals[0].strMeasure16}
      ${data.meals[0].strIngredient17} ${data.meals[0].strMeasure17}
      ${data.meals[0].strIngredient18} ${data.meals[0].strMeasure18}
      ${data.meals[0].strIngredient19} ${data.meals[0].strMeasure19}
      ${data.meals[0].strIngredient20} ${data.meals[0].strMeasure20}`
    
      document.querySelector('#dir').innerText= `${data.meals[0].strInstructions}`
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
document.querySelector('button').addEventListener('click', getGrub)
