/********
Display weather
*********/
/******NOTE API KEY IS TEMP********/

const apiKey = "74d6c34312bd6cafedaa671daec546e6"
const url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=545da3f9&app_key=74d6c34312bd6cafedaa671daec546e6&`
const charityList = document.querySelector('#charityList')
const zip = document.querySelector('#zip')
const city = document.querySelector('#city')
const size = document.querySelector('#size')
const state = document.querySelector('#state')


document.querySelector('button').addEventListener('click', clicky)

function clicky() {
  fetch(url+`zip=${zip.value}&sizeRange=${size.value}&city=${city.value}&fundraisingOrgs=0&state=${state.value}&pageSize=10`)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {
      console.log(data)
      data.forEach((item, i) => {
        let name = document.createElement('h4')
        name.innerText = item.charityName
        let ein = document.createElement('p')
        ein.innerText = `EIN: ${item.ein}`
        let subsection =document.createElement('p')
        subsection.innerText = item.irsClassification.subsection
        let address = document.createElement('p')
        address.innerText=`Street Address: ${item.mailingAddress.streetAddress1}`
        let website = document.createElement('a')
        website.innerText=`${item.websiteURL}`
        let li = document.createElement('li')
        li.appendChild(name)
        li.appendChild(ein)
        li.appendChild(subsection)
        li.appendChild(address)
        li.appendChild(website)
        charityList.appendChild(li)
      });


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
