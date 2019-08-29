$(document).ready(function(){
      $('.top_slider').slick({
      	 mobileFirst: true,
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
$(".slick-next").text(">");
$(".slick-prev").text("<");


