// Pulls local storage
for (let index = 9; index <= 17; index++) {
  var textArea = $("#" + index).find("textarea");
  var storage = localStorage.getItem(index);
  textArea.val(storage);
}

// Checks current time
var currentHour = moment().hours();

// Adds current date and time to header
$("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
$("#currentTime").text(moment().format("LTS"));

// Saves hour and description in local storage
$(".saveBtn").on("click", function (event) {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();

  localStorage.setItem(hour, description);
});

// Changes classes of time blocks
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
});