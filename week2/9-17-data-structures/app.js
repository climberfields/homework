A light switch that can be either on or off. Boolean (lightswitch = on ? off)
A user's email address. String. let email = climberfields@gmail.com; A spaceship with a hull, laser blasters, tractor beam, and warp drive. Arrays const spaceship = [ 'hull', 'laser blasters', 'tractor']
A list of student names from our class. Arrays
A list of student names from our class, each with a location. Objects
A list of student names from our class, each with a location and each with a list of favorite tv shows. Objects

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', violet];
console.log(colors[4]);
const Alex = {
	favorite food: "Anything vegan",
	hobby: "anything involving exercise",
	town: "Austin",
	favorite datatype: "Boolean"}
console.log(Alex.hobby);

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
console.log(crazyObject.larry.characters[3].favourtieHobby)
console.log(crazyObject.larry.nicknames[1])
console.log(crazyObject.larry[2].name)

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

const inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = const inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.null
