$(document).ready(function () {
  //Меню на мобилках и планшетах
  $('.header__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.bg__modal').toggleClass('bg__modal--active');
  });

  $('.menu__exit').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  $('.bg__modal').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  //Отправка данных на мейл
  $("#free-form").submit(function () {
    $.ajax({
        type: "POST",
        url: "assets/php/mail.php",
        data: $(this).serialize()
    }).done(function () {
        alert('DONE');           
    });
    return false;
});

  //Слайдеры
  $('.talk__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.talk__arrow-left'),
    nextArrow: $('.talk__arrow-right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.cars__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.cars__arrow-left'),
    nextArrow: $('.cars__arrow-right'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

