document.getElementById("drink").onkeyup = function(e){
    if(e.keyCode == 13){
       alcAPI();
    }
}
function alcAPI(){
  let drink = document.getElementById("drink").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then (res => res.json())
    .then (data => {
      console.log(data)
      if (data["drinks"] == null){
        alert("That drink wasn't found, try another one")
        return
        }
      document.getElementById("title").style.paddingTop = "24px";
      document.getElementById("theSelection").innerHTML = "";
      for (let i=0; i<data["drinks"].length; i++){
        document.getElementById("theSelection").innerHTML += (`<a href="https://www.youtube.com/results?search_query=${data["drinks"][i]["strDrink"]}%20recipe" target="_blank"> <img src="${data["drinks"][i]["strDrinkThumb"]}"><li>${data["drinks"][i]["strDrink"]}</li></a>`)
      }
    })
}
