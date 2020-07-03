$(function(){

$('.sub-menu-wrapper-link').click(function(){
	$('.sub-menu').toggleClass('active')
	$(this).toggleClass('active')
})

$('.btn-menu').click(function(){
	$('.menu ul').toggleClass('active')
	$(this).toggleClass('active')
})
$("#menu").on("click","a", function (event) {
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });

$('.menu ul li a').click(function(){
	$('.menu ul').removeClass('active')
	$('.btn-menu').removeClass('active')
})

// $('.sub-menu-wrapper-link').click(function(){
// 	$('.menu ul').addClass('active')
// 	$('.btn-menu').addClass('active')
// })

});

