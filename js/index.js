
$('.open-btn').on('click',function(){
//   $('.open-btn').css('transform',' translateX(250%)')
  $('.home-content h2').css('transform','translateX(150px)')
  $('.home-content h2').css('width','50%')
  $('.home-content p').css('transform','translateX(150px)')
  $('.home-content p').css('width','30%')
    $('.navbar').animate({width:'250px'},1000)
    $('.open-btn').css('transform',' translateX(250px)')
    $('.open-btn').css('transition','all 1s')
})
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
    $('.navbar a').fadeOut(10000);
   setTimeout(() => {
    $('.navbar').animate({width:'0px'},10000)
   }, 2000);
   
    
})