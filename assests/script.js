$('.certificate-wrap').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.comment-outer').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.card-case-outer').hover(
  function(){ $('.card-case-image').addClass('hoverclass') },
  function(){ $('.card-case-image').removeClass('hoverclass') }
)
$('.card-case-outer-2').hover(
  function(){ $('.card-case-image-2').addClass('hoverclass') },
  function(){ $('.card-case-image-2').removeClass('hoverclass') }
)
$('.card-case-outer-3').hover(
  function(){ $('.card-case-image-3').addClass('hoverclass') },
  function(){ $('.card-case-image-3').removeClass('hoverclass') }
)
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $(".outer-nav").addClass("fixedHeader");
  }
  else{
    $(".outer-nav").removeClass("fixedHeader");
  }
});
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});