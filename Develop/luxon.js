var hourStr = ["9","10","11","12","1","2","3","4","5"]
var DateTime = luxon.DateTime;
var date = (DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}));
console.log(date)
$("#currentDay").append(date)

var pastHour = before(DateTime.local())
$(pastHour).attr("class", "past")

    
    