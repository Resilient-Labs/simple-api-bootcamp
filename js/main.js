// host: https://www.pexels.com/api/documentation/#photos-search 
//pixels key: KWjeLdw4ZE2kmNpvnyjIaz955RQIeJFBvH1xzsYME754GH16fiYW1CSU"

// rapidAPI key: 080cafb9ccmsh9554bbe20fef11dp1bcfdbjsn659e04917336

const pexelsApiKey = 'KWjeLdw4ZE2kmNpvnyjIaz955RQIeJFBvH1xzsYME754GH16fiYW1CSU' 

const searchButton = document.getElementById('searchButton') 
const userSearchInput = document.getElementById('userSearch') 
const imageContainer = document.getElementById('imageContainer') 

searchButton.addEventListener('click', searchImages) 

function searchImages() {
    const query = userSearchInput.value 
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: pexelsApiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const photos = data.photos 
        if (photos.length > 0) {
            const randomIndex = Math.floor(Math.random() * photos.length) 
            const selectedPhoto = photos[randomIndex] 
            const imageUrl = selectedPhoto.src.original 
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image">` 
        } else {
            imageContainer.innerHTML = 'No images found for the given search.' 
        }
    })
    .catch(error => {
        console.error('Error:', error) 
    }) 
}