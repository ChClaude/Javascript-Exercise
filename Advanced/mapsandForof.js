var michael = {
    name: "I am Michael",
    age: 24,
    status: "online"
}

var isabella = {
    name: "I am Isabella",
    age: 22,
    status: "online"
}

var dwayne = {
    name: "I am Dwayne",
    age: 23,
    status: "online"
}

let users = new Map();

users.set("michael", michael);
users.set("isabelle", isabella);
users.set("dwayne", dwayne);

//console.log(users);
//console.log(users.size);
//console.log(users.get("dwayne"));

//console.log(users.values());

// for (const value of users.values()) {
//     console.log(value.name);
// }

// for (const [key, name] of users.entries()) {
//     console.log(`${key} = ${name.name}`);
// }

// users.forEach((value, key) => console.log(key + " = " + value.name));

var newArr = [["one", "1"], ["two", "2"], ["three", "3"]]

var newMap = new Map(newArr)

console.log(newMap)