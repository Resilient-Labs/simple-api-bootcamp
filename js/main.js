let AirBnb = {
  // input: document.querySelector('input').value,
  clear: ()=>{
    // document.querySelector('input').value = ''
    document.querySelectorAll('li').forEach((x)=>{
      x.innerHTML = ''
    })
  },
  find: ()=>{
    // AirBnb.input = document.querySelector('input').value
    AirBnb.clear()
    fetch("https://mashvisor-api.p.rapidapi.com/airbnb-property/top-reviewed?page=1&city=Los%20Angeles&reviews_count=30&zip_code=91342&state=CA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
		"x-rapidapi-key": "3ae1d00c97msh298612aebb81230p11684djsn405007844583"
	           }
          })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        AirBnb.names = data.content.list.map(x=>x.name).forEach(
(x,i)=>{
            let listItem = document.querySelectorAll('li')[i]
            let title = document.createElement('h2')
            title.innerHTML = x
            listItem.appendChild(title)
          }
        )

        AirBnb.price = data.content.list.map(x=>x.price_formatted).forEach(
(x,i)=>{
            let listItem = document.querySelectorAll('li')[i]
            let title = document.createElement('h3')
            title.innerHTML = x
            listItem.appendChild(title)
          }
        )

        // AirBnb.latlon = data.content.list.map(x=>{return(x.lat+','x.lng)}).forEach((x)=>{console.log(x)});

        AirBnb.smartLo = data.content.list.map(x=>x.smart_location).forEach(
(x,i)=>{
            let listItem = document.querySelectorAll('li')[i]
            let title = document.createElement('h4')
            title.innerHTML = x
            listItem.appendChild(title)
          }
        )

        AirBnb.img = data.content.list.map(x=>x.xl_picture_url).forEach(
(x,i)=>{
            let listItem = document.querySelectorAll('li')[i]
            let title = document.createElement('img')
            title.src = x
            listItem.appendChild(title)
          }
        )

        AirBnb.mapImg = data.content.list.map(x=>x.map_image_url).forEach(
(x,i)=>{
            let listItem = document.querySelectorAll('li')[i]
            let title = document.createElement('img')
            title.src = x
            listItem.appendChild(title)
          }
        )


      }
    )
  }
}

AirBnb.find()
