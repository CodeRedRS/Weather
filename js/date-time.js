/**
 * Created by Dakota on 5/25/2015.
 */
function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var day = currentTime.getDay();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();

    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    day = (day < 10 ? "0" : "") + day;
    month = (day < 10 ? "0" : "") + month;

    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    var currentDateString = day + "/" + month + "/" + year;

    $('#time').text(currentTimeString);
    $('#date').text(currentDateString);

    $('.navbar-right').find('li').fadeIn('slow');
}

$(document).ready(function () {
    setInterval('updateClock()', 1000);
});