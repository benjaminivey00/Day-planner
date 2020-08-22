$(document).ready(function(){

    $(".saveBtn").on("click", function(){
       var value = $(this).siblings('.textInput').val()
       var time = $(this).parent().attr('id')
       localStorage.setItem(time, value)
       });

console.log(localStorage.getItem('time1'))

$ ("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function updateColor(){

    let currentHour = moment().hour();
    $('.timeBlock').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1])
    if (blockHour < currentHour) {
        $(this).addClass('past')
    }
    else if (blockHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
    }
    else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
    })
}

$('#time-8 .textInput').val(localStorage.getItem('time-8'))
$('#time-9 .textInput').val(localStorage.getItem('time-9'))
$('#time-10 .textInput').val(localStorage.getItem('time-10'))
$('#time-11 .textInput').val(localStorage.getItem('time-11'))
$('#time-12 .textInput').val(localStorage.getItem('time-12'))
$('#time-13 .textInput').val(localStorage.getItem('time-13'))
$('#time-14 .textInput').val(localStorage.getItem('time-14'))
$('#time-15 .textInput').val(localStorage.getItem('time-15'))
$('#time-16 .textInput').val(localStorage.getItem('time-16'))
$('#time-17 .textInput').val(localStorage.getItem('time-17'))
updateColor();

});