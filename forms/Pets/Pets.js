//creates two arrays
let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withSal = petNames
// adds the name Sal to the end of the list
petNames.push("Sal")
//prints the array petNames in the console to check to see if Sal was added
console.log(petNames)
// prints the value that is at index 2 of array petNames
console.log(petNames[2])
// prints the length of the petNames array
console.log(petNames.length)
//takes off the last value in the array
petNames.pop()
// prints new array in the console
console.log(petNames)