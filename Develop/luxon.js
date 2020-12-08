$(document).ready(function () {


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
$(".9am").append(hourNine)
$("#10am").append(hourTen)
$("#11am").append(hourEleven)
$("#12pm").append(hourTwelve)
$("#1pm").append(hourOne)
$("#2pm").append(hourTwo)
$("#3pm").append(hourThree)
$("#4pm").append(hourFour)
$("#5pm").append(hourFive)

console.log(now.hour)
console.log(hourOne.hour)
console.log(hourNine)



if ((hourNine.hour)<(now.hour)){
  console.log("true")
  $("input:first").addClass("past")
}else if ((hourNine.hour)===(now.hour)){
  $("input:first").addClass("present")
}else ($("input:first").addClass("future"))

























//if ((dateHourFive.hour)>(date.hour)){

//}


//use dateHour interval for each row??


//hourOfRow = ???? how to make hour of row = to certain number


//var currentHour = hourOfRow


//if (dateHour===currentHour){
  //  addclass(".present")
//}


//if (dateHour>currentHour){
    //addclass(".past")
//}

//if (date>dateHourFive){
  //  dateHourFive.addclass(".future")
//}



});