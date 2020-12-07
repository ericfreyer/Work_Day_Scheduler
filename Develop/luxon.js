$(document).ready(function () {


var DateTime = luxon.DateTime;
var date = (DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}));
//this changes the hour of DateTime

//var dateHourFive = (DateTime.fromObject({hour: 5})) 
//$("#currentDay").append(date)
//$('#5pm').append(dateHourFive)
var hourFive = (DateTime.fromObject({hour: 17}))

var now = DateTime.local();

//having trouble calling the hour from DateTime
console.log(date)
console.log(hourFive.hour)
console.log(now.hour)






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