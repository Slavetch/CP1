$(document).ready(function(){
      $('.top_slider').slick({
      	 mobileFirst: true,
      	 prevArrow: '<img class="slick-prev" src="Assets/IMG/arrowForSliderNext.png">',
								nextArrow: '<img class="slick-next" src="Assets/IMG/arrowForSliderPrev.png">'
      });

      $('.team_slider').slick({
      	// autoplay: true,
      	// arrows: false,
      	// mobileFirst: true,
      	appendArrows: ".arrows",
      	infinite: true,
							dots: false,
							slidesToShow: 3,
							slidesToScroll: 1,
							responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]

      });

    }); 


menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");

	if (x.className === "top-menu") {
		x.className += " responsive";
	}	else {x.className === "top-menu";
	}
};

