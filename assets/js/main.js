
document.querySelector("button").addEventListener("click", getCartoonImg);


//using  function to trigger event 
async function getCartoonImg (){

  //url for api
  const url = "https://3d-cartoon-face.p.rapidapi.com/run";

  //my params url and options that will be passed in fetch
  const options = {

    //POST method is used when you are trying to recieve certain info from the server
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "aba26dae7amshf9d59effe0cf0e5p1c0f4fjsna5d7719f824e",
      "X-RapidAPI-Host": "3d-cartoon-face.p.rapidapi.com",
    },

    //i used method .stringify to recieve the info from the object
    body: JSON.stringify({
      //this event will occur when user inputs img 
      image: document.querySelector('#cartoonImg').value,
      render_mode: "3d",
      output_mode: "url",
    }),
  };

  try {
    //clears msg from <p></p>  when button is clicked
    document.querySelector('#notWorking').innerText = ""

    const response = await fetch(url, options);
    
    const result = await response.json();
    console.log(result);

    //used to display img output as cartoon
    document.querySelector('#finalImg').src = result.output_url

    //Edge Case when url is wrong and displays the property "msg" from the object in the api
    if(!result.output_url){
      document.querySelector('#notWorking').innerText = result.msg
    }

  } catch (error) {
    console.error(error);
  }}
