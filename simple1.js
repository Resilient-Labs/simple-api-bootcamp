// Goal: Display data returned from an api
document.querySelector('button').addEventListener('click', getCuteness)

function getCuteness() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    const puppyImage = data.message; // Get the URL of the dog image from the 'message' property
    const imgElem = document.createElement('img'); // Create a new <img> element
    imgElem.src = puppyImage; // Set the 'src' attribute of the <img> element to the dog image URL

    const existingImgElems = document.getElementsByTagName('img');
    for (let i = existingImgElems.length - 1; i >= 0; i--) {
      existingImgElems[i].remove();
    }
    document.body.appendChild(imgElem); // Add the <img> element to the document body
  })
  .catch(err => {
    console.log(`error ${err}`);
  });
}

//The for loop then iterates over the HTMLCollection object, starting from the last element and moving backwards towards the first element:

//It does this by setting the loop counter i to the index of the last element (existingImgElems.length - 1) and then decrementing it by 1 on each iteration until it reaches 0.

// On each iteration, the loop removes the image element at the current index using the remove() method:

//This removes the image element from the DOM, effectively deleting it from the page. By removing all the existing images before adding a new one, the code ensures that only one image is displayed at a time.