/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery-validation/dist/jquery.validate.js
//= ../../bower_components/Swiper/dist/js/swiper.min.js
//= ../../bower_components/page-scroll-to-id/jquery.malihu.PageScroll2id.js

/*
    Custom
 */

//= partials/owl.carousel.js
//= partials/jquery.magnific-popup.min.js


function forSVG() {
    $('.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
}

var bool = true;
function setCounter(){
  
  if(bool){
    $('.counter b').each(function () {
      $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));

            }
        }, function(done){
          console.log("done");
        });
    });
    bool = false;
  } 
}

$(document).ready(function() {

 $("a[rel='m_PageScroll2id']").mPageScroll2id({
  clickedClass: "active",
  scrollEasing: "easeInOutExpo",
  scrollSpeed: 700
 });


$(".calculator__slider__slide1__content__chbxs__chbx-wrap").click(function(event) {
  console.log($(this).find("input"));
});





// full page animation




$(window).scroll(function(event) {
  var howWeWorkOffset = $(".how-we-work").offset().top;
var whoWork = $(".who-work").offset().top + 200; 
  var sepor = $(document).scrollTop();
  console.log(sepor);
  if(sepor >= howWeWorkOffset) {
    $("section.how-we-work").addClass("animate");
    $(".how-we-work__item").addClass("animate");
  }
  if(sepor >= whoWork) {
    $(".our-garanties__icons").addClass("animate");
  }
  if(sepor >= whoWork) {
    setCounter();
  }
});












forSVG();

//swiper js

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true

});

var owl2items = $(".owl-init");
var owl3items = $(".owl-init2");


owl2items.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        items:2,
        autoplay: true,
        responsive : {
            0 : {
                items:2,
            },
            480 : {
                items:6,
            },
            768 : {
                items:4,
            },
            1198 : {
                items:2,
            }
        }
    });

owl3items.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        items:8,
        autoplay: true,
        responsive : {
          0 : {
              items:4,
          },
          480 : {
              items:4,
          },
          768 : {
              items:5,
          },
          1198 : {
              items:8,
          }
      }
    });


$('.vide-about-us__play').magnificPopup({
  type:'iframe',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


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
       $(".calculator__slider__slide1__content__submit-wrap").addClass("active");
}

});

$(".calculator__slider__slide2__content__chbxs__chbx-wrap__rad-outter input[type='radio']").click(function() {
if($(this).is(":checked"))
{
       $(".calculator__slider__slide2__content__submit-wrap").addClass("active");
}


/*else
{
console.log(":(");
}*/
});
});



var kiev, odessa, markerOdessa, markerKiev;
  function initMap() {
    var odessaStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
    var kievStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"lightness":"100"}]},{"featureType":"landscape.man_made","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"lightness":"23"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffd900"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffd900"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#cccccc"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];

    odessa = new google.maps.Map(document.getElementById('map-kiev'), {
      center: {lat: 46.471610, lng: 30.736011},
      zoom: 12,
      styles: odessaStyle,
      scrollwheel: false,
    });

    kiev = new google.maps.Map(document.getElementById('map-odessa'), {
      center: {lat: 50.393920, lng: 30.478775},
      zoom: 12,
      styles: kievStyle,
      scrollwheel: false,
    });

    var markerOdessa = new google.maps.Marker({
      position: {lat: 46.471610, lng: 30.736011},
      map: odessa,
      icon: "/img/marker.png"
    });

    var markerKiev = new google.maps.Marker({
      position: {lat: 50.393920, lng: 30.478775},
      map: kiev,
      icon: "/img/marker.png"
    });

  }