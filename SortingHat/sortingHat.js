document.querySelector("button").addEventListener("click", function(){
  fetch ("https://www.potterapi.com/v1/sortingHat")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let house= document.getElementById('houseIMG')
      let description= document.getElementById('description')
      let quote= document.getElementById('quote')
      let author= document.getElementById('author')
        document.getElementById('house').innerHTML=response
        if (response === 'Slytherin'){
          house.src= ('media/slytherin.png')
          description.innerHTML ="Slytherin produces more than its share of Dark wizards, but also turns out leaders who are proud, ambitious and cunning. Merlin is one particularly famous Slytherin"
          quote.innerHTML='"Or perhaps in Slytherin you’ll make your real friends, those cunning folk use any means to achieve their ends"'
          author.innerHTML="The Sorting Hat"
        }else if (response === 'Ravenclaw'){
          house.src= ('media/ravenclaw.png')
          description.innerHTML="Ravenclaws prize wit, learning, and wisdom. It's an ethos etched into founder Rowena Ravenclaw's diadem: 'wit beyond measure is man's greatest treasure'"
          quote.innerHTML='"Or yet in wise old Ravenclaw, if you’ve a ready mind, where those of wit and learning, will always find their kind"'
          author.innerHTML="The Sorting Hat"
        }else if (response === 'Hufflepuff'){
          house.src= ('media/hufflepuff.png')
          description.innerHTML="Hufflepuffs value hard work, patience, loyalty, and fair play. The house has produced its share of great wizards – not least Newt Scamander, author of Fantastic Beasts and Where to Find Them"
          quote.innerHTML='"I’ll teach the lot, and treat them just the same"'
          author.innerHTML="Helga Hufflepuff"
        }else if (response === 'Gryffindor'){
          house.src= ('media/gryffindor.png')
          description.innerHTML="With a lion as its crest and Professor McGonagall at its head, Gryffindor is the house which most values the virtues of courage, bravery and determination"
          quote.innerHTML='"You might belong in Gryffindor, where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart"'
          author.innerHTML="The Sorting Hat"
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

});
