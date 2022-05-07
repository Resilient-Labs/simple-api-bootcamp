
document.querySelector('#addLiBtn').addEventListener('click', addColor)

let ul = document.querySelector("#colorSlot")




function addColor() {
  // assigning the type of checkbox for checkBoxVariable
  let colorBox = document.createElement('div')
  colorBox.setAttribute("id", "colorSection");

  // To select a value from an imput

  let colorChecked = document.querySelector('input[name="color"]:checked')

  let colorSelection = ""

    if( colorChecked === null ){
      colorSelection = ""
    } else {
      colorSelection = colorChecked.value
    }


  let li = document.createElement('li')
  ul.appendChild(li)
  li.appendChild(colorBox)
  
  console.log(colorSelection)

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(data => {

      console.log(data)


      colorBox.style.background = data.hex;

      document.querySelector('body').style.background = data.hex;




      document.querySelector('p').innerText = data.hex
      // document.querySelector('h3').innerText = data.explanation

      // if( data.media_type === 'image'){
      //       document.querySelector('#nasaImg').src = data.hdurl
      // }else if( data.media_type === 'video'){ 
      //       document.querySelector('iframe').src = data.url
      // }else{
      //       alert('Unsupported Media Type')
      // }
    })
    .catch(err => {
      console.log(`errors $(err)`)
    })


}


// Clear section
document.querySelector('#clearList').addEventListener('click', clearList)

function clearList() {
  // console.log(hello)
  ul.innerHTML = ''
}



function markedDone(event) {
  console.log(event.target.tagName)
  event.target.nextSibling.classList.toggle('strikeThrough')
  event.target.parentElement.classList.toggle('strikeThrough')
  displayToDoLeft()
}

// document.querySelector('#clearCompletedBtn').addEventListener('click', deleteParentDone)

function deleteParentDone() {
  document.querySelectorAll('li.strikeThrough').forEach(element => element.style.display = 'none')
}

function displayToDoLeft() {
  let nonStrikeThroughAmount = [...document.querySelectorAll('li')].filter(element => !element.classList.contains("strikeThrough")).length
  console.log("Todo Left: ", nonStrikeThroughAmount)
  const toDoLeftText = document.querySelector("#toDoLeftText")
  toDoLeftText.innerText = `${nonStrikeThroughAmount}`
}