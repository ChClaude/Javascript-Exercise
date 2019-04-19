/**
 * This method generates a random password
 * @returns password for the user to sign in
 */
function generateRandomPassword() {
    return getRandomIntInclusive(7777777, 9999999999);
}

/*
This method generates random numbers between min and max both inclusive
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadBody() {
    document.getElementById('random-password').innerHTML = generateRandomPassword().toString();
}