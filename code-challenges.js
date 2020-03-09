// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
const secret = str => {
   let cool = str.split("")
   let dopeskies = cool.map(value => {
       if(value == 'a'){
           value = 4
           return value
       } else if (value == 'e'){
           value = 3 
           return value 
       } else if (value == 'i') {
           value = 1
           return value
       } else if (value == 'o'){
           value = 0 
           return value
       } else {
           return value
       }
   })
   
    return dopeskies.join("")
}
console.log(secret(secretCodeWord1))
console.log(secret(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
const theA = array => {
    return array.filter(value => value.toLowerCase().includes('a')).join(" ")
}

console.log(theA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

const isFull = array =>{
    return ( [...new Set( array )].length > 2 ) ? false : true
}

console.log(isFull(hand1))
console.log(isFull(hand2))
