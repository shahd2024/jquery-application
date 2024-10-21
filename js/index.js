/// <reference types="../@types/jquery" />



$('.open-btn').on('click',function(){

  $('.home-content h2').css('transform','translateX(20%)')
  $('.home-content h2').css('width','50%')
  $('.home-content p').css('transform','translateX(20%)')
  $('.home-content p').css('width','30%')
//   let navbarWidth = '22%';
   
//     let navbarWidthPx = ($(window).width() * 22) / 100;
//     $('.navbar').animate({width:navbarWidth}, 1000);
    // $('.open-btn').animate({
    //     left: navbarWidthPx + 'px'
    // }, 1000);
    $('.open-btn').animate({
        left:'300px'
    }, 1000);
  
$('.navbar .nav-cont').animate({width:'300px'},1000)
// $('.side-box').animate({width:'toggle',paddingInline:'toggle'},2000 )
});
   
   

// $('.signuare-content-1').slideUp(0)
// $('.signuare-content')
// $('.signuare-content').slideUp(0)
// $('.signuare-content').slideUp(0)
$('#sign-1 .signuare-content').slideDown(1000);
$('.signuare-content').not('#sign-1 .signuare-content').slideUp(1000);
$('#sign-1').on('click',function(e){
    // $('.signuare-content-0').slideToggle(1000)
    // $('.signuare-content-2').slideUp(1000)
    // $('.signuare-content-3').slideUp(1000)
    // $('.signuare-content-4').slideUp(1000)
    // $('#details .signuare-content').not(e.target.next()).slideUp(1000)
    // $('.signuare-content').$(this).slideToggle(1000);
    // $('.signuare-content').not($(this)).slideUp(1000);
    // $(this).slideToggle(1000);

    // $('#sign-1 .signuare-content').slideToggle(1000);
    // $('.signuare-content').not($(this)).slideUp(1000);
    $('#sign-1 .signuare-content').slideToggle(1000);

    // إغلاق جميع العناصر الأخرى التي تحمل الفئة signuare-content خارج #sign-1
    $('.signuare-content').not('#sign-1 .signuare-content').slideUp(1000);
   

   
})
$('#sign-2').on('click',function(e){
    // $('.signuare-content-1').slideToggle(1000)
    // // $('.signuare-content-0').slideUp(1000)
    // $('#details .signuare-content')(e.target.next()).slideUp(1000)
    // $('.signuare-content-3').slideUp(1000)
    // $('.signuare-content-4').slideUp(1000)
    $('#sign-2 .signuare-content').slideToggle(1000);

    // إغلاق جميع العناصر الأخرى التي تحمل الفئة signuare-content خارج #sign-1
    $('.signuare-content').not('#sign-2 .signuare-content').slideUp(1000);
})
$('#sign-3').on('click',function(){
    // $('.signuare-content-3').slideToggle(1000)
    // $('.signuare-content').slideUp(1000)
    // $('.signuare-content-2').slideUp(1000)
    // $('.signuare-content-4').slideUp(1000)
    $('#sign-3 .signuare-content').slideToggle(1000);
    $('.signuare-content').not('#sign-3 .signuare-content').slideUp(1000);
})
$('#sign-4').on('click',function(){
    // $('.signuare-content-4').slideToggle(1000)
    // $('.signuare-content').slideUp(1000)
    // $('.signuare-content-3').slideUp(1000)
    // $('.signuare-content-2').slideUp(1000)
    $('#sign-4 .signuare-content').slideToggle(1000);
    $('.signuare-content').not('#sign-4 .signuare-content').slideUp(1000);
})


$('.close').on('click',function(e){
//     $('.navbar a').fadeOut(10000);
//    setTimeout(() => {
//     $('.navbar').animate({width:'0px'},10000)
//    }, 2000);
e.preventDefault(); 
// $('#closing').stop(true, true).fadeOut(1000,function(){
   
// })
$('.nav-cont').animate({width:'0px'},1000)
$('.open-btn').animate({
    left:'0px'
}, 1000);
$('.home-content h2').css('transform','translateX(0%)')
  $('.home-content h2').css('width','50%')
  $('.home-content p').css('transform','translateX(0%)')
  $('.home-content p').css('width','30%')

   
    
})


$(document).ready(function() {
    
    let targetDate = new Date("December 31, 2028 23:59:59").getTime();

    
    let countdownInterval = setInterval(function() {
        
        let now = new Date().getTime();

        
        let timeLeft = targetDate - now;

        
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        
        $('.days').html( days );
        $('.hours').html( hours +'h');
        $('.minutes').html( minutes );
        $('.seconds').html( seconds +'s');

        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
           
            $('.eve-1').classList.add('d-none')
            $('.time-up').classList.replace('d-none','d-block')
        }
    }, 1000); 
});
let message=document.getElementById('message');
let i=100;
$('#message').on('input',function(e){
  let messageLength=message.value.length;
  i=100-messageLength;
    document.querySelector('.num').innerHTML=i;

   
})




