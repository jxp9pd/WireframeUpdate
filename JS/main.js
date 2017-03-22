//scrolling
function scrollDown() {
	console.log("We've made it mama!");
	//below is a selector. 
	$('body').animate({scrollTop: $('.blue').offset().top }, 1000);

}
function scrollUp() {
	console.log("We've made it mama!");
	$('body').animate({scrollTop: $('.pink').offset().top }, 1000);
}
//show/hide
function showImage() {
	document.getElementById('flower').style.display = 'block';
}

function hideImage() {
	document.getElementById('flower').style.display = 'none';
}
//fading
function fadeOut() {
	$('#flower').fadeOut(1000);
}
function fadeIn() {
	$('#flower').hide();
	$('#flower').fadeIn(1000);
}
//scroll check
$(window).scroll(function() {
	console.log($(window).scrollTop());
	var breakpoint = 1460;
	if ($(window).scrollTop() >= breakpoint) {
		$('.teal').css('visibility', 'visible').hide().fadeIn(1000);
		$(this).off('scroll');
	}
});
