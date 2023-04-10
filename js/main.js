const button = document
  .querySelector("button")
  .addEventListener("click", getCard);

function getCard() {
  let name = document.querySelector("#name").value;
  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("container").style.display = "flex";
  // let type = document.querySelector("#type").value;
  let cardName0 = document.querySelector(".cardName0");
  let cardName1 = document.querySelector(".cardName1");
  let cardName2 = document.querySelector(".cardName2");
  let cardName3 = document.querySelector(".cardName3");
  let cardName4 = document.querySelector(".cardName4");
  let cardName5 = document.querySelector(".cardName5");
  let img0 = document.querySelector(".img0");
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");
  let img3 = document.querySelector(".img3");
  let img4 = document.querySelector(".img4");
  let img5 = document.querySelector(".img5");
  let description0 = document.querySelector(".description0");
  let description1 = document.querySelector(".description1");
  let description2 = document.querySelector(".description2");
  let description3 = document.querySelector(".description3");
  let description4 = document.querySelector(".description4");
  let description5 = document.querySelector(".description5");
  let cardName = [
    cardName0,
    cardName1,
    cardName2,
    cardName3,
    cardName4,
    cardName5,
  ];
  let img = [img0, img1, img2, img3, img4, img5];
  let description = [
    description0,
    description1,
    description2,
    description3,
    description4,
    description5,
  ];
  let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${capitalizedName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Array.from(data.data);
      for (let i = 0; i <= 5; i++) {
        cardName[i].innerText = data.data[i].name;
        img[i].src = data.data[i].card_images[0].image_url_small;
        // console.log(data.data[0].card_images[0].image_url_small);
        description[i].innerText = data.data[i].desc;
        // console.log(data.desc);
      }
      // cardName.innerText = data.data[0].name;
      // img.src = data.data[0].card_images[0].image_url_small;
      // console.log(data.data[0].card_images[0].image_url_small);
      // description.innerText = data.data[0].desc;
      // console.log(data.desc);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
