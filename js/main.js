//simple api ,to display data returned from an api



 async function getHolidays(){
  let date = document.querySelector('input').value
  let UL = document.querySelector('#list')
  const url= `https://calendarific.com/api/v2/holidays?&api_key=be58310d9012347618a03089b70c14f558bdf210&country=US&year=${date}`
   const response = await fetch (url) 
   const holidays = await response.json()
   console.log(holidays)
   holidays.response.holidays.forEach(holiday => {
    const li = document.createElement('li')
    const date = holiday.date.iso
    const name = holiday.name
    const p = document.createElement('p')
    const pDate=document.createElement('p')
    pDate.innerText = date
    p.innerText = name
    li.appendChild(p)
    li.appendChild(pDate)
    UL.appendChild(li)
   })
 }



document.querySelector('button').addEventListener('click', getHolidays)

//worked with rc staff Seth