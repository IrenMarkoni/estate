// параллакс 
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

let scene2 = document.getElementById('scene2');
let parallaxInstance2 = new Parallax(scene2);

// счетчик цифр
$('.counter-number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// воспроизведение и пауза аудио
var audioElement = document.querySelector(".music");
// var musicStart = document.querySelector(".music_start");
$('.music_start').click(function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
})

// вызов модального окна при отправке формы
$('form').on('submit', function(e) {
    var $form = $(this);
    e.preventDefault();
    var $data = $form.serialize();
    $.ajax({
        type: "POST",
        url: "/mail.php",
        data: $data,
        success: function(msg) {
            console.log('Success');
            console.log(msg);  
            $('#exampleModal').arcticmodal(); 
            $("#form")[0].reset();
        },
        error: function(msg) {
            console.log('Error');
            alert(msg);
        },
    });
  });
//   вызов всплаывающей формы с кнопок

$('.hidden_form_button').click(function() {
    $('#hidden_form').arcticmodal(); 
});

// слайдер отзывы
$('.multiple-items').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
  });

  $('.center').slick({
    autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// $(document).ready(function(){
//   $('.address_card').on('click',function(){
    
//     $('.address_card_hidden').show();
//   })
// })

// $('.address_card_hidden').hide();
// $('.address_card').click(function(){
//   $('.address_card_hidden').slideToggle(300);
//   var text = $(this).text();
//   $(this).text();
// });

// $(".address_card").mouseenter(function (event) {
//   $(this).find(".address_card_hidden").css({"display":"block"});
// }).mouseleave(function (event) {
//   $(this).find(".address_card_hidden").css({"display":"none"});
// });


// $(".address_card").mouseenter(function (event) {
//   $(this).find(".address_card_hidden").animate({ right: "0"}, 1000, "linear") ;
// }).mouseleave(function (event) {
//   $(this).find(".address_card_hidden").animate({ right: "-100%"}, 1000, "linear");
// });



//$(".address_card_hidden").animate(" right: 0 ") ;


$(".address_card").mouseenter(function (event) {
  $(this).find(".address_card_hidden").addClass('animate__animated animate__fadeInRight show_block');
}).mouseleave(function (event) {
  $(this).find(".address_card_hidden").removeClass('animate__animated animate__fadeInRight show_block');
});