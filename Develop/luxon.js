$(document).ready(function () {

getItem()

function getItem(){
localStorage.getItem("content"); 
}

var DateTime = luxon.DateTime;
var date = (DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}));
$("#currentDay").append(date)


var now = DateTime.local();
var hourNine = (DateTime.fromObject({hour: 9}))
var hourTen = (DateTime.fromObject({hour: 10}))
var hourEleven = (DateTime.fromObject({hour: 11}))
var hourTwelve = (DateTime.fromObject({hour: 12}))
var hourOne = (DateTime.fromObject({hour: 13}))
var hourTwo = (DateTime.fromObject({hour: 14}))
var hourThree = (DateTime.fromObject({hour: 15}))
var hourFour = (DateTime.fromObject({hour: 16}))
var hourFive = (DateTime.fromObject({hour: 17}))
$("#9am").append(hourNine)
$("#10am").append(hourTen)
$("#11am").append(hourEleven)
$("#12pm").append(hourTwelve)
$("#1pm").append(hourOne)
$("#2pm").append(hourTwo)
$("#3pm").append(hourThree)
$("#4pm").append(hourFour)
$("#5pm").append(hourFive)


if ((hourNine.hour)<(now.hour)){
  console.log("true")
  $(".row1 input").addClass("past")
}else if ((hourNine.hour)===(now.hour)){
  $(".row1 input").addClass("present")
}else ($(".row1 input").addClass("future"))


if ((hourTen.hour)<(now.hour)){
  console.log("true")
  $(".row2 input").addClass("past")
}else if ((hourTen.hour)===(now.hour)){
  $(".row2 input").addClass("present")
}else ($(".row2 input").addClass("future"))


if ((hourEleven.hour)<(now.hour)){
  $(".row3 input").addClass("past")
}else if ((hourEleven.hour)===(now.hour)){
  $(".row3 input").addClass("present")
}else ($(".row3 input").addClass("future"))


if ((hourTwelve.hour)<(now.hour)){
  $(".row4 input").addClass("past")
}else if ((hourTwelve.hour)===(now.hour)){
  $(".row4 input").addClass("present")
}else ($(".row4 input").addClass("future"))


if ((hourOne.hour)<(now.hour)){
  $(".row5 input").addClass("past")
}else if ((hourOne.hour)===(now.hour)){
  $(".row5 input").addClass("present")
}else ($(".row5 input").addClass("future"))


if ((hourTwo.hour)<(now.hour)){
  $(".row6 input").addClass("past")
}else if ((hourTwo.hour)===(now.hour)){
  $(".row6 input").addClass("present")
}else ($(".row6 input").addClass("future"))


if ((hourThree.hour)<(now.hour)){
  $(".row7 input").addClass("past")
}else if ((hourThree.hour)===(now.hour)){
  $(".row7 input").addClass("present")
}else ($(".row7 input").addClass("future"))


if ((hourFour.hour)<(now.hour)){
  $(".row8 input").addClass("past")
}else if ((hourFour.hour)===(now.hour)){
  $(".row8 input").addClass("present")
}else ($(".row8 input").addClass("future"))


if ((hourFive.hour)<(now.hour)){
  $(".row9 input").addClass("past")
}else if ((hourFive.hour)===(now.hour)){
  $(".row9 input").addClass("present")
}else ($(".row9 input").addClass("future"))










$(".saveBtn").click(function (){
  var contentInput = $("input").val().trim();
  localStorage.setItem("content", contentInput);
})


$("#9am").val(localStorage.getItem("content"));

  $("#10am").val(localStorage.getItem("10am"));

  $("#11am").val(localStorage.getItem("11am"));

  $("#12pm").val(localStorage.getItem("12pm"));

  $("#1pm").val(localStorage.getItem("1pm"));

  $("#2pm").val(localStorage.getItem("2pm"));

  $("#3pm").val(localStorage.getItem("3pm"));

  $("#4pm").val(localStorage.getItem("4pm"));

  $("#5pm").val(localStorage.getItem("5pm"));


//.val() get user input look into it
//also, check activity 8  a.attr("data-name", movies[i]); and var movieName = $(this).attr("data-name") use this instead of grabbing from text?
//https://api.jquery.com/attr/

//function getStoredContent() {
  //JSON.parse(localStorage.getItem("content"));
//}

//getStoredContent()

});



