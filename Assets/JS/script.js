// Variables

// Checks current time
var currentHour = moment().hours();


// Adds current date and time to header
$("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
$("#currentTime").text(moment().format("LTS"));



// Changes classes of hours
$(".time-block").each(function () {
var hour = $(this).attr("id");
var checkHourID = parseInt(hour);

if (checkHourID < currentHour) {
    $(this).addClass("past");
}
if (checkHourID > currentHour) {
    $(this).addClass("future");
}
if (checkHourID === currentHour) {
    $(this).addClass("present");
}
})
