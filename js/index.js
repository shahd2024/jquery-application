
$('.open-btn').on('click',function(){

  $('.home-content h2').css('transform','translateX(20%)')
  $('.home-content h2').css('width','50%')
  $('.home-content p').css('transform','translateX(20%)')
  $('.home-content p').css('width','30%')
  let navbarWidth = '22%';
   
    let navbarWidthPx = ($(window).width() * 22) / 100;
    $('.navbar').animate({width: navbarWidth}, 1000);
    $('.open-btn').animate({
        left: navbarWidthPx + 'px'
    }, 1000);
});
   
   

$('.signuare-content-2').slideUp(0)
$('.signuare-content-3').slideUp(0)
$('.signuare-content-4').slideUp(0)
$('#sign-1').on('click',function(){
    $('.signuare-content').slideToggle(1000)
    $('.signuare-content-2').slideUp(1000)
    $('.signuare-content-3').slideUp(1000)
    $('.signuare-content-4').slideUp(1000)
})
$('#sign-2').on('click',function(){
    $('.signuare-content-2').slideToggle(1000)
    $('.signuare-content').slideUp(1000)
    $('.signuare-content-3').slideUp(1000)
    $('.signuare-content-4').slideUp(1000)
})
$('#sign-3').on('click',function(){
    $('.signuare-content-3').slideToggle(1000)
    $('.signuare-content').slideUp(1000)
    $('.signuare-content-2').slideUp(1000)
    $('.signuare-content-4').slideUp(1000)
})
$('#sign-4').on('click',function(){
    $('.signuare-content-4').slideToggle(1000)
    $('.signuare-content').slideUp(1000)
    $('.signuare-content-3').slideUp(1000)
    $('.signuare-content-2').slideUp(1000)
})


$('.close').on('click',function(){
//     $('.navbar a').fadeOut(10000);
//    setTimeout(() => {
//     $('.navbar').animate({width:'0px'},10000)
//    }, 2000);
$('#closing').fadeOut(2000,function(){
    $('.navbar').animate({width:'0px'},1000)
})
   
    
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

        
        $('.days').html( '-' +days +'D');
        $('.hours').html( hours +'h');
        $('.minutes').html( minutes +'m');
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




