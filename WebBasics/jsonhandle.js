const student = {
    name: 'Naidoo',
    age: 21,
    subject: 'Application development'
}


// converting the student object to string
const stdToString = JSON.stringify(student)

console.log(typeof stdToString)

//localStorage.setItem('student', stdToString)

// converting a string(that is internally an object) to a JSON object
const stdToJSON = JSON.parse(stdToString) 

console.log(typeof stdToJSON)