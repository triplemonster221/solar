 $(document).ready(function(){


      $('.rate__slaider').slick({
         asNavFor:".rate__slaider-info",
         dots: false,
         arrows: false,
         slidesToScroll: 1,
      });

      $('.rate__slaider-info').slick({
         asNavFor:".rate__slaider",
         dots: false,
         arrows: true,
         prevArrow: '<button type="button" class="slick-prev arrows"><img src="../images/arrow-left.png"></button>',
         nextArrow: '<button type="button" class="slick-next arrows"><img src="../images/arrow-right.png"></button>',
         fade: true,
         slidesToScroll: 1,
      });


    });