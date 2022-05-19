# 📊 Simple Api 1
This website allows you to put in the name of a monster/villain in the Legend of Zelda game series and get the monster's description.

**Link to project:** https://kerlinaugustin-simple-api1.netlify.app/

![link](https://user-images.githubusercontent.com/102834611/169188795-862aa79a-2eb5-4d56-aa93-19fc498c1b5a.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This website utilizes an API. I first created an input and a button. In javascript I created a function called getCharacter for the purpose to get an image from the api. I made the input equal to a variable. I then put the variable I created into the name parameter section of the api url. Then I created the fetch function and passed in the api url with the variable in the date parameter. Then I told it to give me a response in JSON, then I took that response and put it into a parameter called data. The data I got back from the JSON had a name and description key so I set them equal to different html tags to show on the website whenever someone put a character name into the input.

## Lessons Learned:

I learned that data in the second ".then" function is a parameter that could be named anything you want. For some reason I kept thinking it needed to be called data because JSON is responding with information that one can preceive as data but that is not the case.
