/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery-validation/dist/jquery.validate.js
//= ../../bower_components/gsap/src/minified/TweenMax.min.js
//= ../../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js

/*
    Custom
 */
//= partials/debug.addIndicators.js
//= partials/owl.carousel.js
//= partials/animation-gsap.js
//= partials/jquery.magnific-popup.min.js
//= partials/waypoints.js
//= partials/animate.js
//= partials/jquery.simplr.smoothscroll.js

$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
})


$(document).ready(function() {





var owl = $(".calculator__slider");


    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        mouseDrag: false,
        items:1
    });

$(".calculator__slider__slide1__content__submit-wrap").click(function() {
    owl.trigger('next.owl.carousel', '300');
});

$(".calculator__slider__slide2__content__submit-wrap").click(function() {
    owl.trigger('next.owl.carousel', '300');
  
});



$(".calculator__slider__slide1__content__chbxs__chbx-wrap__rad-outter input[type='radio']").click(function() {
if($(this).is(":checked"))
{
       console.log("zalupa worked");
       $(".calculator__slider__slide1__content__submit-wrap").addClass("active");
}

});

$(".calculator__slider__slide2__content__chbxs__chbx-wrap__rad-outter input[type='radio']").click(function() {
if($(this).is(":checked"))
{
       console.log("zalupa worked");
       $(".calculator__slider__slide2__content__submit-wrap").addClass("active");
}


/*else
{
console.log(":(");
}*/
});
});






$(document).ready(function($) {

	
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
		.fromTo("section.panel.turqoise", 1, {x: "-100%", opacity: 1}, {x: "0%",opacity: 0, ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.green",    1, {x:  "-200%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "300%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		
		.addTo(controller);

		
});