$(document).ready(function () {


var DateTime = luxon.DateTime;
var date = (DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}));
var dateHour = (DateTime.local().toLocaleString({hour: '2-digit'}))
console.log(dateHour)
console.log(date)
$("#currentDay").append(date)


//hourOfRow = ???? how to make hour of row = to certain number


//var currentHour = hourOfRow


//if dateHour===currentHour{
    //addclass(".present")
//}


//if dateHour>currentHour{
    //addclass(".past")
//}

//if dateHour<currentHour{
    //addclass(".future")
//}



});