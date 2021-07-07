let key='dict.1.1.20191031T155149Z.d79fa4a5eda82b47.89d926b1dddaddf1ec150b6a7015f29db35bd032'
let button=document.querySelector('button')
let def=document.querySelector('#def')
let exampleSentence=document.querySelector('#exampleSentence')
let pos=document.querySelector('#pos')
let input;

function api1(){
  
  if(input===document.querySelector('input').value ){return}
input=document.querySelector('input').value
fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=en-ru&text=${input}`)
.then(res => res.json())
.then(response =>{

  console.log(response)
  let view=response.def[0]
  // putting the Part of Speech in the browser
  let createPos=document.createTextNode(view.pos)
  pos.appendChild(createPos)

// putting the example in the browser
  let createExample=document.createTextNode(view.tr[0].ex[0].text)
  exampleSentence.appendChild(createExample)
// creating definition
  for (let i=0;i<=2;i++){
    let element=document.createElement('li')

    let createDef=document.createTextNode(view.tr[0].mean[i].text)
    element.appendChild(createDef)
    def.appendChild(element)
    // document.body.insertBefore(element, def)
  }


})
.catch(err=>{
  console.log(err)
})
}

button.addEventListener('click',()=>{

  api1()



})


// things i want to do
//  add titles on top of the elements that pop up ex: definitons
// clear the field after every entry
