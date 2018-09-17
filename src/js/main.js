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
    $('.phone-popup').removeClass('phone-popup--active');
    $('.entry-popup').removeClass('entry-popup--active');
    $('.free-popup').removeClass('free-popup--active');
    $('.sale-popup').removeClass('sale-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  //Заказать звонок
  $('.phone__btn').on('click', function () {
    $('.phone-popup').toggleClass('phone-popup--active');
    $('.bg__modal').toggleClass('bg__modal--active');
  });

  $('.phone-popup__exit').on('click', function () {
    $('.phone-popup').removeClass('phone-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  $('.form__btn-exit').on('click', function () {
    $('.entry-popup').removeClass('entry-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  //Записаться в автосервис
  $('.info__btn, .btns__btn, .item__btn').on('click', function () {
    $('.entry-popup').toggleClass('entry-popup--active');
    $('.bg__modal').toggleClass('bg__modal--active');
  });

  $('.entry-popup__exit').on('click', function () {
    $('.entry-popup').removeClass('entry-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  $('.form__btn-exit').on('click', function () {
    $('.entry-popup').removeClass('entry-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  //Бесплатная консультация
  $('.callback__btn--free-btn, .callback__btn').on('click', function () {
    $('.free-popup').toggleClass('free-popup--active');
    $('.bg__modal').toggleClass('bg__modal--active');
  });

  $('.free-popup__exit').on('click', function () {
    $('.free-popup').removeClass('free-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  $('.form__btn-exit').on('click', function () {
    $('.free-popup').removeClass('free-popup--active');
    $('.bg__modal').removeClass('bg__modal--active');
  });

  //Получить скикду
    //Бесплатная консультация
    $('.hero__btn').on('click', function () {
      $('.sale-popup').toggleClass('sale-popup--active');
      $('.bg__modal').toggleClass('bg__modal--active');
    });
  
    $('.sale-popup__exit').on('click', function () {
      $('.sale-popup').removeClass('sale-popup--active');
      $('.bg__modal').removeClass('bg__modal--active');
    });
  
    $('.form__btn-exit').on('click', function () {
      $('.sale-popup').removeClass('sale-popup--active');
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

