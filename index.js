const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)

let favRest = {
  name: "chipotle",
  cuisine: "Mexican resturant",
  rating: 3.3
}
// Console log the restaurant's name using the object

console.log(favRest.name)

// Add a new key called location and add the restaurant's location

favRest.location = "35 Westchester Square, Bronx, NY 10461"

// Change the rating of the restaurant to increase it by one

favRest.rating = favRest.rating + 1

// Add a new key called test and set the value to null

favRest.test = null

// Delete the test key

delete favRest.test

// Console log the object to see if the test key is gone

console.log(favRest)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn


for (let key in favRest){
  console.log(key, "is", favRest[key] )

}


