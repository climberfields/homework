1. // loop to 20
let i = 0;
while (i <= 20) { console.log(i); i++}

2. // loop to 200 onlyy even integers
for ( let i = 0; i <= 200; i++) {
if ( i % 2 === 0) { console.log(i)} }

3. // random saying 


4. // fizzbuzz
for ( let i = 0; i <= 100; i++) {
 if ( i % 3 === 0) {console.log('fizz');} 
 else if (i % 5 ===0) console.log('buzz');
  else if  (i % 3 === 0 && i % 5 === 0)
   console.log('fizzbuzz'); else {console.log(i);}}

5. // Array of GA folks
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

undefined
shahzad
(3) ["Shahzad", 1000, "Austin"]
shahzad.splice(0, 1, "Gameboy");	
["Shahzad"]
daniel.push(187);
4
daniel.splice(1,1,0);
[186]
daniel
(4) ["Daniel", 0, "Dallas", 187]
ryan.splice(0,0, Robin)
VM266:1 Uncaught ReferenceError: Robin is not defined
    at <anonymous>:1:18
(anonymous) @ VM266:1
ryan
(3) ["Ryan", 65, "Denver"]
ryan.splice(0,0, "Robin")
[]
ryan
(4) ["Robin", "Ryan", 65, "Denver"]
jim.splice(2, 1, "Austin", "Ocean City", "Miami")
["All cities"]
jim
(5) ["Jim", 16, "Austin", "Ocean City", "Miami"]

6. // Ninja Turtles

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];



for ( let i = 0; i <= ninjaTurtles.length; i++) {console.log(ninjaTurtles[i].toUpperCase());}

7. // return of the closets


8. // Multiples of 3 or 5

for (i = 0; i <= 1000; i++) { if (i % 3 === 0 || i % 5 === 0) {console.log(i^i)}}