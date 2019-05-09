function compareDates(date1 : Date, date2 : Date) {
    let text;

    if (date1 > date2)
        text = date1 + " is after 25 May 2050 " + date2;
    else
        text = "\"" + date1.toDateString() + "\"" + " is before " + "\"" + date2.toDateString() + "\"";

    return text;
}

let today, someday;

today = new Date();
someday = new Date();

someday.setFullYear(2050, 3, 16);

console.log(compareDates(today, someday));

/*
Displaying Dates
JavaScript will (by default) output dates in full text string format:

Wed Mar 25 2015 02:00:00 GMT+0200 (South Africa Standard Time)
When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

Example
d = new Date();
document.getElementById("demo").innerHTML = d;
Same as:
d = new Date();
document.getElementById("demo").innerHTML = d.toString();
The toUTCString() method converts a date to a UTC string (a date display standard).

Example
var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();
The toDateString() method converts a date to a more readable format:

Example
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
 */