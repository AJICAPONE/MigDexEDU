$(document).ready(function () {
    var slider2 = $('.exam-index-cards-2');
    var sld2 = function() {
        if ($(window).width() <= 768) {

            slider2.slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                infinite: false,
                // mobileFirst: true,
                dots: true,
                appendDots: '.mobile-slider-dots--wrap2',
                customPaging: function () {
                    return '<a class="mobile-slider__dots2"></a>';
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            // centerMode: true,

                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            // centerMode: true,
                        }
                    },

                ]
            });
        }
    };
    sld2();
    $(window).resize(sld2);


    //var slider = $('.exam-index-cards');
    var sld = function() {
        if ($(window).width() <= 768) {

            $('.exam-index-cards').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                infinite: false,
                // centerPadding: '60px',
                // mobileFirst: true,

                dots: true,
                appendDots: '.mobile-slider-dots--wrap',
                customPaging: function () {
                    return '<a class="mobile-slider__dots"></a>';
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },

                ]
            });
        }
    };
    sld();
    $(window).resize(sld);

    var sld3 = function() {
        if ($(window).width() <= 768) {

            $('.testing-includes--list').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                infinite: false,
                // centerPadding: '60px',
                // mobileFirst: true,

                dots: true,
                appendDots: '.testing-includes-dots--wrap',
                customPaging: function () {
                    return '<a class="testing-includes-slider__dots"></a>';
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },

                ]
            });
        }
    };
    sld3();
    $(window).resize(sld3);


    var sld4 = function() {
        if ($(window).width() <= 768) {

            $('.subtest-migrant-wrapper').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                infinite: false,
                // centerPadding: '60px',
                // mobileFirst: true,

                dots: true,
                appendDots: '.testing-includes-dots--wrap',
                customPaging: function () {
                    return '<a class="testing-includes-slider__dots"></a>';
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                        }
                    },

                ]
            });
        }
    };
    sld4();
    $(window).resize(sld4);
});

