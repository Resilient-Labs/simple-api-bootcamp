
function getFact () {// create a function is gonna hold your fetch
    let getNum = document.querySelector('input').value // create a variable with an input
    
    fetch(`http://numbersapi.com/${getNum}/math?dannyuwu`)// everything goes in yout input put it insde your url
.then(res => res.text())
.then(data => {
console.log(data)

document.querySelector('#result').innerText = `${data}` // display the data that the giving it to us
})
.catch(err => {
    console.log(`error ${err}`)
});
}
document.querySelector('button').addEventListener('click', getFact)// call the function so when we click the fetch is gonna run and give us the data that we ask for 