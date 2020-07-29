// Adds current date and time to header

$("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
$("#currentTime").text(moment().format("LTS"));



// Checks current time

var currentHour = moment().hours();

console.log(currentHour)