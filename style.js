
$(document).ready(function() {
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var newDate = new Date();
    newDate.setDate(newDate.getDate());

$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval(function() {
    var milliseconds = new Date().getMilliseconds();
    $("#milli").html((milliseconds < 10 ? "0" : "") + milliseconds); 
    }, 1000);

setInterval(function() {
    var seconds = new Date().getSeconds();
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);
    
setInterval(function() {
    var minutes = new Date().getMinutes();
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
    
setInterval(function() {
    var hours = new Date().getHours();
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
});

/* Background Color Change */
var q = new Date();
var p = q.getMinutes();

if (p % 2 == 0) {
    $('.container').css("background-color", "pink");
} else {
    $('.container').css("background-color", "yellow");
};
 