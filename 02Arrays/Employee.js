/*
This program creates five employees belonging to companyTech
and prints their different names
*/

function employees(name = "", age = 18, skills = "", experience = 1) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.experience = experience;
}

var keshia = new employees("Keshia", 19, "Software developer", 2);
var casius = new employees("Casius", 24, "Java developer", 3);
var steve = new employees();
var kurt = new employees("Kurt", 25, "Web developer", 4);

// var keshia = {name:"Keshia", age: 19, skills:"Software developer", experience: 2};
// var casius = {name:"Casius", age: 24, skills:"Java developer", experience: 3};
// var steve = {name:"Steve", age: 27, skills:"Python developer", experience: 5};
// var kurt = {name:"Kurt", age: 48, skills:"Javascript developer", experience: 15};

var arr = [keshia, casius, steve, kurt];

arr.forEach(
    function(arr, i){
        console.log(i + " " + arr.age);
    }
);