var myTodos = ["Read Bible", "Pray", "Do push-ups", "Play Basket", "Chat"]

var powers = [{continent: "Africa", country: "Congo",
president: "Sassou Nguesso"}, {continent: "Europe", country: "Paris",
president: "Emmanuel Macron"}, {continent: "America", country: "Argentina",
president: "Mauricio Macri"}, {continent: "Asia", country: "China",
president: "Xi Jinping"}]

//console.log(myTodos.indexOf("Chat"));

// find country by president's name
function findCountry(arr, presidentInput) {
    let index = arr.findIndex(function(newArr, index) {
        return newArr.president.toLowerCase() === presidentInput.toLowerCase();
    })

    return arr[index].country;
}

let testApp = findCountry(powers, "mauricio macri");

console.log(testApp);
