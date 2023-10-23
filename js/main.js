// host: https://www.pexels.com/api/documentation/#photos-search 
//pixels key: KWjeLdw4ZE2kmNpvnyjIaz955RQIeJFBvH1xzsYME754GH16fiYW1CSU"

// rapidAPI key: 080cafb9ccmsh9554bbe20fef11dp1bcfdbjsn659e04917336

const pexelsApiKey = 'KWjeLdw4ZE2kmNpvnyjIaz955RQIeJFBvH1xzsYME754GH16fiYW1CSU';

const searchButton = document.getElementById('searchButton');
const userSearchInput = document.getElementById('userSearch');
const imageContainer = document.getElementById('imageContainer');

searchButton.addEventListener('click', searchImages);

function searchImages() {
    const query = userSearchInput.value;
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: pexelsApiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const photos = data.photos;
        if (photos.length > 0) {
            const randomIndex = Math.floor(Math.random() * photos.length);
            const selectedPhoto = photos[randomIndex];
            const imageUrl = selectedPhoto.src.original;
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image">`;
        } else {
            imageContainer.innerHTML = 'No images found for the given search.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}




// const searchButton = document.getElementById('searchButton');
// const removeBackgroundButton = document.getElementById('removeBackgroundButton');
// const userSearchInput = document.getElementById('userSearch');
// const imageContainer = document.getElementById('imageContainer');

// searchButton.addEventListener('click', searchImages);
// removeBackgroundButton.addEventListener('click', removeImageBackground);

// function searchImages() {
//     const query = userSearchInput.value;
//     fetch(`https://api.pexels.com/v1/search?query=${query}`, {
//         headers: {
//             Authorization: pexelsApiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const photos = data.photos;
//         if (photos.length > 0) {
//             const randomIndex = Math.floor(Math.random() * photos.length);
//             const selectedPhoto = photos[randomIndex];
//             const imageUrl = selectedPhoto.src.original;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image">`;
//             imageContainer.dataset.photoId = selectedPhoto.id;
//         } else {
//             imageContainer.innerHTML = 'No images found for the given search.';
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// function removeImageBackground() {
//     const photoId = imageContainer.dataset.photoId;
//     if (photoId) {
//         fetch(`https://objectcut.p.rapidapi.com/v1/remove?photo_id=${photoId}`, {
//             headers: {
//                 'X-RapidAPI-Key': objectCutApiKey
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.link;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image with Removed Background">`;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     } else {
//         imageContainer.innerHTML = 'Please search for an image first.';
//     }
// }


//second attempt
// const searchButton = document.getElementById('searchButton');
// const removeBackgroundButton = document.getElementById('removeBackgroundButton');
// const userSearchInput = document.getElementById('userSearch');
// const imageContainer = document.getElementById('imageContainer');

// searchButton.addEventListener('click', searchImages);
// removeBackgroundButton.addEventListener('click', removeImageBackground);

// let selectedPhotoId = null;

// function searchImages() {
//     const query = userSearchInput.value;
//     fetch(`https://api.pexels.com/v1/search?query=${query}`, {
//         headers: {
//             Authorization: pexelsApiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const photos = data.photos;
//         if (photos.length > 0) {
//             const randomIndex = Math.floor(Math.random() * photos.length);
//             const selectedPhoto = photos[randomIndex];
//             selectedPhotoId = selectedPhoto.id;
//             const imageUrl = selectedPhoto.src.original;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image">`;
//         } else {
//             imageContainer.innerHTML = 'No images found for the given search.';
//             selectedPhotoId = null;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// function removeImageBackground() {
//     if (selectedPhotoId) {
//         fetch(`https://objectcut.p.rapidapi.com/v1/remove?photo_id=${selectedPhotoId}`, {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Host': 'objectcut.p.rapidapi.com',
//                 'X-RapidAPI-Key': objectCutApiKey
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.link;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image with Removed Background">`;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     } else {
//         imageContainer.innerHTML = 'Please search for an image first.';
//     }
// }

//third attempt
// const searchButton = document.getElementById('searchButton');
// const removeBackgroundButton = document.getElementById('removeBackgroundButton');
// const userSearchInput = document.getElementById('userSearch');
// const imageContainer = document.getElementById('imageContainer');

// searchButton.addEventListener('click', searchImages);
// removeBackgroundButton.addEventListener('click', removeImageBackground);

// let selectedPhotoId = null;

// function searchImages() {
//     const query = userSearchInput.value;
//     fetch(`https://api.pexels.com/v1/search?query=${query}`, {
//         headers: {
//             Authorization: pexelsApiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const photos = data.photos;
//         if (photos.length > 0) {
//             const randomIndex = Math.floor(Math.random() * photos.length);
//             const selectedPhoto = photos[randomIndex];
//             selectedPhotoId = selectedPhoto.id;
//             const imageUrl = selectedPhoto.src.original;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image">`;
//         } else {
//             imageContainer.innerHTML = 'No images found for the given search.';
//             selectedPhotoId = null;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// function removeImageBackground() {
//     if (selectedPhotoId) {
//         fetch(`https://objectcut.p.rapidapi.com/v1/remove?photo_id=${selectedPhotoId}`, {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Host': 'objectcut.p.rapidapi.com', // Make sure this matches the actual host
//                 'X-RapidAPI-Key': objectCutApiKey
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = data.link;
//             imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image with Removed Background">`;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     } else {
//         imageContainer.innerHTML = 'Please search for an image first.';
//     }
// }

