  //
  // const input1 = document.querySelector('#input1').value
  // const input2 = document.querySelector('#input2').value
  const btn = document.querySelector('#submit')

  btn.addEventListener('click', ()=>{
    const input1 = document.querySelector('#input1').value
    const input2 = document.querySelector('#input2').value

    fetch(`https://foaas.com/waste/${input1}/${input2}`, {headers:{"Accept" : "application/json"}})

      .then(res => res.json())

      .then(res => {
        console.log(res)
        const thinkingMessage = res.message
        let textContent = document.createTextNode(thinkingMessage)
        putValue.appendChild(textContent)

        const fromUser = res.subtitle
        let subtitleMessage = document.createTextNode(fromUser)
        subtitle.appendChild(subtitleMessage)
      })

      .catch(err =>{
        console.log(`error ${err}`)
        alert("this shit don't work")
      })
  })
