$(document).ready(function () {
    $('.js-index-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.js-index-slider--prev',
        nextArrow: '.js-index-slider--next',
        dots: true,
        appendDots: '.js-index-slider-dots--wrap',
        rows: 0,
        variableWidth: true,
        centerMode: true,
        customPaging: function () {
            return '<a class="js-index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });

    $('.index-mobile-video-slider--wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.index-mobile-index-slider--prev',
        nextArrow: '.index-mobile-index-slider--next',
        dots: true,
        appendDots: '.index-mobile-slider-dots--wrap',
        rows: 0,
        customPaging: function () {
            return '<a class="index-mobile-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]
    });

    var rev = $('.index-video-slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        // console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        prevArrow: '.index-video-slider--prev',
        nextArrow: '.index-video-slider--next',
        dots: true,
        appendDots: '.index-video-slider-dots--wrap',
        focusOnSelect: true,
        infinite: true,
        // centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        rows: 0,
        useTransform: true,
        customPaging: function (slider, i) {
            return '<a class="index-video-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: "unslick",
            },

        ]
        /*infinite: false,*/
    });

    $('.exam-index-card--text').each(function() {
        if ($(this).text().length > 100) {
            $(this).text( $(this).text().substring(0, 100) + '…');
        }
    });





    (function($) {
        $.fn.swipeDetector = function(options) {
            // States: 0 - no swipe, 1 - swipe started, 2 - swipe released
            var swipeState = 0;
            // Coordinates when swipe started
            var startX = 0;
            var startY = 0;
            // Distance of swipe
            var pixelOffsetX = 0;
            var pixelOffsetY = 0;
            // Target element which should detect swipes.
            var swipeTarget = this;
            var defaultSettings = {
                // Amount of pixels, when swipe don't count.
                swipeThreshold: 70,
                // Flag that indicates that plugin should react only on touch events.
                // Not on mouse events too.
                useOnlyTouch: false
            };

            // Initializer
            (function init() {
                options = $.extend(defaultSettings, options);
                // Support touch and mouse as well.
                swipeTarget.on("mousedown touchstart", swipeStart);
                $("html").on("mouseup touchend", swipeEnd);
                $("html").on("mousemove touchmove", swiping);
            })();

            function swipeStart(event) {
                if (options.useOnlyTouch && !event.originalEvent.touches) return;

                if (event.originalEvent.touches) event = event.originalEvent.touches[0];

                if (swipeState === 0) {
                    swipeState = 1;
                    startX = event.clientX;
                    startY = event.clientY;
                }
            }

            function swipeEnd(event) {
                if (swipeState === 2) {
                    swipeState = 0;

                    if (
                        Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
                        Math.abs(pixelOffsetX) > options.swipeThreshold
                    ) {
                        // Horizontal Swipe
                        if (pixelOffsetX < 0) {
                            swipeTarget.trigger($.Event("swipeLeft.sd"));
                            console.log("Left");
                        } else {
                            swipeTarget.trigger($.Event("swipeRight.sd"));
                            console.log("Right");
                        }
                    } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
                        // Vertical swipe
                        if (pixelOffsetY < 0) {
                            swipeTarget.trigger($.Event("swipeUp.sd"));
                            console.log("Up");
                        } else {
                            swipeTarget.trigger($.Event("swipeDown.sd"));
                            console.log("Down");
                        }
                    }
                }
            }

            function swiping(event) {
                // If swipe don't occuring, do nothing.
                if (swipeState !== 1) return;

                if (event.originalEvent.touches) {
                    event = event.originalEvent.touches[0];
                }

                var swipeOffsetX = event.clientX - startX;
                var swipeOffsetY = event.clientY - startY;

                if (
                    Math.abs(swipeOffsetX) > options.swipeThreshold ||
                    Math.abs(swipeOffsetY) > options.swipeThreshold
                ) {
                    swipeState = 2;
                    pixelOffsetX = swipeOffsetX;
                    pixelOffsetY = swipeOffsetY;
                }
            }

            return swipeTarget; // Return element available for chaining.
        };
    })(jQuery);

// Showcase

        $('.menu-sandwich').click(function () {
            $(this).addClass('active');

            $('.sandwich-menu-show').addClass('active');
            setTimeout(function() {
                $('.sandwich-menu-close--wrap').addClass('active');
            }, 200);
            //$('.sandwich-menu-close--wrap').addClass('active');
            // $('.sandwich-menu-close--wrap').slideDown(300);
            if($(this).hasClass('active')){
                $('body').css('overflow','hidden');
            }
        });


        $(".sandwich-menu-show").swipeDetector().on("swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd", function(event) {
                if (event.type === "swipeLeft") {
                    message.text("Swipe Left");
                } else if (event.type === "swipeRight") {
                    message.text("Swipe Right");
                } else if (event.type === "swipeUp") {
                    // message.text("Swipe Up");
                    // $('.sandwich-menu-close--wrap').slideUp(300);
                    $('.sandwich-menu-close--wrap').removeClass('active');
                    setTimeout(function() {
                        $('.sandwich-menu-show').removeClass("active");
                        $('body').css('overflow','scroll');
                    }, 350);
                    // $('.sandwich-menu-show').removeClass('active');
                    $('.menu-sandwich').removeClass('active');
                    if($('.menu-sandwich').not('active')){
                        $('.sandwich-menu-close--wrap').slideDown(500);
                    }



                } else if (event.type === "swipeDown") {
                    message.text("Swipe Down");
                }
            });







    // $(function () {
    //     $("#rateYo5").rateYo({
    //         "ratedFill": "#FF4141",
    //         "starWidth": "20px",
    //         "spacing": "8px",
    //         "starSvg": '<svg height="512pt" viewBox="0 -11 512.00047 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.644531 185.011719c-3.878906-11.933594-15.425781-20.132813-31.683593-22.496094l-132.511719-19.257813-59.265625-120.074218c-7.269532-14.730469-18.636719-23.183594-31.183594-23.183594s-23.914062 8.453125-31.183594 23.1875l-59.257812 120.070312-132.515625 19.257813c-16.261719 2.363281-27.8125 10.5625-31.6875 22.496094-3.875 11.933593.648437 25.355469 12.414062 36.820312l95.890625 93.464844-22.640625 131.980469c-2.894531 16.878906 2.039063 26.992187 6.6875 32.507812 5.453125 6.46875 13.40625 10.03125 22.394531 10.03125 6.761719 0 13.953126-1.980468 21.378907-5.882812l118.519531-62.308594 118.527344 62.3125c7.421875 3.902344 14.613281 5.878906 21.375 5.878906h.003906c8.984375 0 16.941406-3.5625 22.394531-10.03125 4.644531-5.511718 9.582031-15.628906 6.683594-32.507812l-22.636719-131.980469 95.886719-93.464844c11.761719-11.464843 16.285156-24.886719 12.410156-36.820312zm0 0"/></svg>',
    //         //"starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>',
    //         multiColor: {
    //
    //             "startColor": "#f35a28", //RED
    //             "endColor"  : "#FDC630"  //GREEN
    //         }
    //     }).on("rateyo.change", function (e, data) {
    //         var rating = data.rating;
    //         $(this).parent().find('.rateyo-hidden').val(rating);
    //
    //     });
    // });

    $(".index-real-review-rateyo").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                // "ratedFill": "#FF4141",
                multiColor: {

                    "startColor": "#f35a28", //RED
                    "endColor"  : "#FDC630"  //GREEN
                },
                "starWidth": "20px",
                "spacing": "8px",
                "starSvg": '<svg height="512pt" viewBox="0 -11 512.00047 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.644531 185.011719c-3.878906-11.933594-15.425781-20.132813-31.683593-22.496094l-132.511719-19.257813-59.265625-120.074218c-7.269532-14.730469-18.636719-23.183594-31.183594-23.183594s-23.914062 8.453125-31.183594 23.1875l-59.257812 120.070312-132.515625 19.257813c-16.261719 2.363281-27.8125 10.5625-31.6875 22.496094-3.875 11.933593.648437 25.355469 12.414062 36.820312l95.890625 93.464844-22.640625 131.980469c-2.894531 16.878906 2.039063 26.992187 6.6875 32.507812 5.453125 6.46875 13.40625 10.03125 22.394531 10.03125 6.761719 0 13.953126-1.980468 21.378907-5.882812l118.519531-62.308594 118.527344 62.3125c7.421875 3.902344 14.613281 5.878906 21.375 5.878906h.003906c8.984375 0 16.941406-3.5625 22.394531-10.03125 4.644531-5.511718 9.582031-15.628906 6.683594-32.507812l-22.636719-131.980469 95.886719-93.464844c11.761719-11.464843 16.285156-24.886719 12.410156-36.820312zm0 0"/></svg>',
                readOnly: true
            }
        );
    });
    $(".mask-phone").mask("+7(000) 000-00-00");
    $(".date-mask").mask("00.00.0000");


    // $('#datepicker').datepicker({
    //     language: 'ru',
    //     regional: 'ru',
    //     beforeShow: function (input, inst) {
    //         setTimeout(function () {
    //             inst.dpDiv.css({
    //                 position: 'absolute',
    //                 top: -250,
    //                 left: 22
    //             });
    //         }, 0);
    //     }
    // });

    $('[data-toggle="datepicker"]').datepicker({
        autoShow: false,
        language: 'ru-RU',
        trigger: '.data-exam-popup',
        pickedClass: 'picked-day-migdex',
        highlightedClass: 'today-day-migdex',
    });

    $('.popup-calendar input').datepicker({
        autoShow: false,
        language: 'ru-RU',
        // autoHide: true,
        trigger: '.data-exam-popup',
        container: '.popup-calendar',
        pickedClass: 'picked-day-migdex',
        highlightedClass: 'today-day-migdex',
        zIndex: 1050,
        // inline: true,
    });


    // $('.datepicker-inline').addClass('datepicker-absolute');
    //



    
    //('.popup-calendar').append( $('.datepicker-container') );

    function headerScroll() {
        if ($(window).scrollTop() > 162) {
            $('.header-fixed').css('position','fixed').fadeIn(200);

        } else {
            $('.header-fixed').fadeOut(100);

        }
    }

    headerScroll();

    $(window).scroll(function () {
        headerScroll();
    });

    $('.tab-article').click(function () {
        $('.tab-article').removeClass('migdex-button-active');
        var tabName = $(this).attr('tabs');
        $(this).addClass('migdex-button-active').siblings().removeClass('migdex-button-active');
        $('.article-content-tabs .' + tabName).addClass('active').siblings().removeClass('active');
    });

    $('.partner-ur-face-wrap').click(function () {
        $('.partner-ur-face-wrap').removeClass('active');
        $('.partner-ur-face-button').removeClass('active');
        var tabName3 = $(this).children().attr('partner');
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children().addClass('active').siblings().removeClass('active');
        $('.partner-fiz-ur-face-content .' + tabName3).addClass('active').siblings().removeClass('active');
    });

    var news_ac = function() {
        if ($(window).width() > 768) {
            $('.migdex-article-item:nth-child(-n+2)').addClass('migdex-active');
            $('.migdex-article-item:nth-child(n+3)').addClass('migdex-news-active');
            $( ".migdex-active" ).wrapAll( "<div class='migdex-active--wrapper'></div>" );
        }
    };
    news_ac ();
    $(window).resize(news_ac);

    var art_ac = function() {
        if ($(window).width() > 768) {
            $('.migdex-article-item2:nth-child(-n+2)').addClass('migdex-active2');
            $('.migdex-article-item2:nth-child(n+3)').addClass('migdex-article-active');
            $( ".migdex-active2" ).wrapAll( "<div class='migdex-active--wrapper2'></div>" );
        }
    };
    art_ac ();
    $(window).resize(art_ac);

    var news_ac2 = function() {
        if ($(window).width() <= 768) {
            $('.migdex-article-item:nth-child(1)').addClass('migdex-active');
            $('.migdex-article-item:nth-child(n+2)').addClass('migdex-news-active');

        }
    };
    news_ac2 ();
    $(window).resize(news_ac2);

    var art_ac2 = function() {
        if ($(window).width() <= 768) {
            $('.migdex-article-item2:nth-child(1)').addClass('migdex-active2');
            $('.migdex-article-item2:nth-child(n+2)').addClass('migdex-article-active');

        }
    };
    art_ac2 ();
    $(window).resize(art_ac2);


    $('.popup-modal-input-checked').on('click',function () {
        $('.popup-modal-input-checked').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $pay = $(this);
        $('.popup-modal-input-check__input').removeAttr('data-pay','checked');
        $pay.parent().find('.popup-modal-input-check__input').attr('data-pay','checked');
    });

    $('.exam-test-info-variant-check').on('click',function () {
        $('.exam-test-info-variant-check').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $exam = $(this);
        $('.exam-modal-input-check__input').removeAttr('data-exam','checked');
        $exam.parent().find('.exam-modal-input-check__input').attr('data-exam','checked');
    });


    // SELECT OPTIONS
    (function ( $ ) {
        var elActive = '';
        $.fn.selectCF = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent = $(this);
                    list = [],
                    html = '';


                $(selectParent).hide();
                if( $(selectParent).children('option').length == 0 ){ return; }
                $(selectParent).children('option').each(function(){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                    })
                });

                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#select-arrow'></use></svg></div>";
                html += 		"<ul class='select-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";

                $(selectParent).after(html);
                var customSelect = $(this).next('ul.selectCF'); // add Html
                var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


                // $('.selectCF').click(function () {
                //     $('.selectCF').find('.select-options').hide();
                //     $(this).find('.select-options').slideDown(100);
                //
                //
                // });
                // handle active select
                $(customSelect).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive = '';
                        $(this).removeClass('onCF');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput).val('');
                        $(seachElOption).show();
                    }else{
                        if(elActive != ''){
                            $(elActive).removeClass('onCF');
                            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption).show();
                        }
                        elActive = $(this);
                        $(this).addClass('onCF');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect = $(customSelect).children('li').children('ul').children('li');
                $(optionSelect).bind('click', function(e){
                    var value = $(this).attr('value');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect).children('li').children('.titleCF').html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent); // call event change
                    }
                });

                // handle search
                $(seachEl).children('input').bind('keyup', function(e){
                    var value = $(this).val();
                    if( value ){
                        $(customSelect).addClass('searchActive');
                        $(seachElOption).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect).removeClass('searchActive');
                        $(seachElOption).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive != ''){
                $(elActive).removeClass('onCF');
                $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".test" ).selectCF({
            color: "#FFF",
            backgroundColor: "#663052",
            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
                // console.log(value + ' : ' + text);
                // event_change.html(value+' : '+text);
            }
        });
    });


    $('input[type="file"]').on('change', function (event, files, label) {
        //var filename = document.getElementById('partner-files').files[0].type;
        //var fileName = this.files[0].name;
        //var fileSize = this.files[0].size;
        //var fileType = this.files[0].type;
        myfile = $( this ).val();
        var ext = myfile.split('.').pop();
        var substr = myfile.split('.').shift().substring(12, 23);

        if(ext == 'pdf'){
            $('.partner-file .icon').html("<svg class='icon icon-pdf'><use xlink:href='static/img/svg/symbol/sprite.svg#pdf'></use></svg>")
        } else if(ext == 'png'){
            $('.partner-file .icon').html("<svg class='icon icon-png'><use xlink:href='static/img/svg/symbol/sprite.svg#png'></use></svg>")
        } else if(ext == 'jpg'){
            $('.partner-file .icon').html("<svg class='icon icon-jpg'><use xlink:href='static/img/svg/symbol/sprite.svg#jpg'></use></svg>")
        } else if(ext == 'docx'){
            $('.partner-file .icon').html("<svg class='icon icon-doc'><use xlink:href='static/img/svg/symbol/sprite.svg#doc'></use></svg>")
        } else if(ext == 'zip'){
            $('.partner-file .icon').html("<svg class='icon icon-zip'><use xlink:href='static/img/svg/symbol/sprite.svg#zip'></use></svg>")
        } else if(ext == 'txt'){
            $('.partner-file .icon').html("<svg class='icon icon-txt'><use xlink:href='static/img/svg/symbol/sprite.svg#txt'></use></svg>")
        }
        $('.partner-text-name').text(substr + '..' + ext);

    });

    //======================================  New JS ============================//
    $('.baner-tab-docum').click(function () {
        $('.baner-tab-docum').removeClass('active');
        var docums = $(this).attr('docum');
        $(this).addClass('active').siblings().removeClass('active');
        $('.docum-all-tabs-tabs .' + docums).addClass('active').siblings().removeClass('active');
    });

    $('.docum-tab1').click(function () {
        $('.baner-docum-page').css('background-image','url("/static/img/general/baner1.jpg")')
    });
    $('.docum-tab2').click(function () {
        $('.baner-docum-page').css('background-image','url("/static/img/general/videoSlider/video2.png")')
    });
    $('.docum-tab3').click(function () {
        $('.baner-docum-page').css('background-image','url("/static/img/general/baner2.jpg")')
    });



    $('.dms-tooltip').hoverIntent({
        over: function () {

            $(this).children('.dms-tooltip-block').fadeIn(150);
            $(this).children('.dms-tooltip-block').css('display','flex');
            $('.dms-tooltip').mouseleave(function () {
                $(this).children('.dms-tooltip-block').fadeOut(200);
            });

        },
        out: function () {


        }
    });

    $('.dms-how-much-list-items').slick({
        rows: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: 'unslick'
            },

        ]

    });



    $('.dms-how-much-mobile-header--wrapper').slick({
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        asNavFor: '.dms-how-much-mobile-body-list-js',
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
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

    $('.dms-how-much-mobile-body-list-js').slick({
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        asNavFor: '.dms-how-much-mobile-header--wrapper',
        responsive: [

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });


    $('.header-nav-menu--item__link').hoverIntent({
        over: function () {

            $(this).next().slideDown(150);
            $(this).next().css('display','flex');
            $('.header-nav').css('backdrop-filter','none');


            $('.header-sub-menu-dropdown-wrap').mouseleave(function () {
                $(this).slideUp(150);
                $(this).css('backdrop-filter','blur(8px)');
                $('.header-nav').css('backdrop-filter','blur(15px)');

            });

            $('.header-nav').mouseleave(function () {
                $('.header-nav').css('backdrop-filter','blur(15px)');
            });


        },
        out: function () {
            $(this).parent().mouseleave(function () {
                $('.header-sub-menu-dropdown-wrap').slideUp(150);
            });

        }
    });

    $('.header-sub-menu-dropdown-item').hoverIntent({
        over: function () {

            $(this).children('.menu-level-3').fadeIn(150);
            $(this).mouseleave(function () {
                $(this).children('.menu-level-3').fadeOut(150);
            });
        },
        out: function () {


        }
    });



});