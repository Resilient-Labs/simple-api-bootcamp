# I'm Bored 🥱

Enter the amount of participants you have and we'll help you relieve your boredom, by generating a random activity!

**Live Demo:** https://slot-machine-jenna-nguyen.netlify.app/

<img width="956" alt="Bored API" src="https://user-images.githubusercontent.com/88993361/137761428-bccb6e8d-84ab-4dcc-8012-7e87b78b1db5.png">

## How It's Made

This is a simple API application that sends a fetch request to the Bored API in order to generate an activity for the user. Then, using conditionals if the generated activity's participants correspond to the user's desired participants then it's a successful fetch, otherwise the program tells the computer to fetch it again.

## What I Learned
Because the API doesn't allow any parameters, I had to manually "create" one by using a conditional statement. Although this is less efficient (which I learned through testing and development), it works for the small scale application that we're creating. If I were to improve the application, I would research for a way to make it more time efficient because it does takes a few seconds to a minute to generate an activity depending on the rarity of participants (the more participants, the more rare and more difficult to find an activity using the API).
