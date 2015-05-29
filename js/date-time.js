/**
 * Created by Dakota on 5/25/2015.
 */
function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var date = currentTime.getDate();
    var day = currentTime.getDay();
    var monthNumber = currentTime.getMonth();
    var year = currentTime.getFullYear();

    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + /*":" + currentSeconds +*/ " " + timeOfDay;
    var currentDateString = dayName[day] + ", " + month[monthNumber] + " " + date + ", " + year;

    $('#time').text(currentTimeString);
    $('#date').text(currentDateString);

    $('.navbar-right').find('li').fadeIn('slow');
}

$(document).ready(function () {
    setInterval('updateClock()', 1000);
});