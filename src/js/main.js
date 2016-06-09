/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery-validation/dist/jquery.validate.js
//= ../../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js
/*
    Custom
 */
//= partials/svgxuse.js
//= partials/owl.carousel.js
//= partials/jquery.magnific-popup.min.js
//= partials/waypoints.js
//= partials/animate.js



var scene = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
.setPin('#pinned-element1'); // the element we want to pin

// Add Scene to ScrollMagic Controller
controller.addScene(scene);