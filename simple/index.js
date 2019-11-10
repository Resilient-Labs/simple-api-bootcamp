
window.onload=function(){
let apiKey = "8bc11cd3-bc8e-48cf-a883-f3c47dee645e"
const btn = document.querySelector("button")

console.log(btn);

btn.addEventListener('click', ()=>{
const input = document.querySelector("input").value

fetch(`https://api.thecatapi.com/v1/breeds/search?q=${input}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let textBox = document.getElementById('textId');

      // let cat =["https://t1.ea.ltmcdn.com/en/images/9/9/6/img_6_asian_cat_breeds_699_paso_5_600.jpg","https://vetstreet.brightspotcdn.com/dims4/default/a12f0db/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F94%2F31%2F3e5bb30b48b2b415d6a3de4e9f6e%2Faegean-cat-thinkstock-464962593-645.jpg"];

      response.forEach((el, index)=>{
        var textNode = document.createElement("div");
        // below code if i wanted to add more properties to be rendered from the API, I would do ${el.'name of property'}
        // because below its saying create a new div for it when rendered
         textNode.innerHTML = `${el.name}<br>${el.description}`;
        textNode.className ='myClass';     // Create a text node
        textBox.appendChild(textNode);
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
  });
}
