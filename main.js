// fetch(
//   ``
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
document.querySelector('button').addEventListener('click', search)

function search(){
    let storage = document.querySelector('input').value
fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${storage}?key=ad11135d-53bf-411f-8a6e-36a792fe6a54`)
.then(res=> res.json()).then(data=>{
        document.querySelector('#result').innerHTML = data[0].shortdef[0]
})

.catch(err =>{
    console.log(`error ${err}`)
});

}


