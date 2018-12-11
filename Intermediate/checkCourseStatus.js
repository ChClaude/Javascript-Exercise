// this app manages the data of students in UCT university
// it checks whether a given student has passed a certain subject

var student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

// arrow function
const passed = student.filter((stdpassed) => stdpassed.isPassed === true);

console.log(passed);