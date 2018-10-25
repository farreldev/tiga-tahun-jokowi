(function($) {
  "use strict";

  var app = (function() {

    var $siteContainer = $('main.site-container'),
      $siteHeader = $('header.site-header'),
      $isDetail = $siteContainer.find('div').hasClass('detail-articles'),
      $windw = $(window),
      $winWidth = $windw.innerWidth,
      $winHeight = $windw.innerHeight;

      ($isDetail) ? $('.sosmed-share-top').hide() : $('.sosmed-share-top').show();
    // $windw.on('scroll', function() {

    //   if($windw.scrollTop() > 55) {
    //     // $siteContainer.css('marginTop', '55px');
    //     $siteHeader.css({
    //       transition: 'all .5s ease-in-out',
    //       backgroundColor: 'rgba(255,255,255,.85)'
    //     });
    //     $('.humburger-btn').find('span').css({
    //       transition: 'all .5s ease-in-out',
    //       backgroundColor: '#333',
    //     });
    //   } else {
    //     $siteHeader.css({backgroundColor: 'transparent'});
    //     $('.humburger-btn').find('span').css({
    //       transition: 'all .5s ease-in-out',
    //       backgroundColor: '#fff',
    //     });
    //   }

    // });

    $('.humburger-btn').on('click', function() {
      $('nav.navigasi').toggleClass('mnuOpen');
    });

    // function samaTinggi(parentBox, elBox) {
    //   $(parentBox).each(function() {
    //     var tinggiKtk = 0;

    //     $(this).find(elBox).each(function() {
    //       if ($(this).height() > tinggiKtk) {
    //         tinggiKtk = $(this).height();
    //       }
    //     });
    //     $(this).find(elBox).height(tinggiKtk);
    //   });
    // }

    $('.mnuArtikel').stick_in_parent();

    $('.artikelItem').matchHeight();
    $('.artikelItem.slick-cloned').matchHeight();

    $('.infoSlider').slick({
      infinite: true,
      variableWidth: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: '.sliderNext',
      prevArrow: '.sliderPrev',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.artikel-slides').slick({
      infinite: true,
      variableWidth: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '.artikelNext',
      prevArrow: '.artikelPrev',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.videoSlides').slick({
      infinite: true,
      variableWidth: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '.slideNext',
      prevArrow: '.slidePrev',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.databoksSlides').slick({
      infinite: true,
      variableWidth: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '.databoksNext',
      prevArrow: '.databoksPrev',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            slidesToScroll: 1
          }
        }
      ]
    });
    // var $ai = $('section.headlines-article').find('div.article-info').children('article'),
    //   $hSatu = $ai.find('h1'),
    //   $par = $ai.find('p'),
    //   $pText = $par.text(),
    //   $jmlStr = $hSatu.text().length,
    //   $replaceStr = $pText.substring(0, 170);

    // if($jmlStr >= 65) {
    //   $par.text($replaceStr + '..');
    // } else {
    //   $pText;
    // }

    

  })();

})(jQuery);
