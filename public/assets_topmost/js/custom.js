(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });

    $(window).on("load", function (event) {
        $("#pre-loader").delay(800).fadeOut(500);
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    // Index 01 Testimonial Slider
    $(".testimonial-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 3,
            },
        }
    });

    $(".team-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 3,
            },
        }
    });

    // Index 02 Product Slider
    $(".product-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    // Index 02 Testimonial Slider
    $(".testimonial-slider-area-2").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });

    // Index 03 Testimonial Slider
    $(".testimonial-slider-area-3").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
        }
    });

    // Video PopUp
    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    // language select
    $("select").niceSelect();

    // Input Plus & Minus Number JS
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Tween Max
    $('.main-banner').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('span, .shape4, .shape5, .banner-text-area-1').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });

    $('.about-1').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.container').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });

    $('.footer-group').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.shape1, .shape2').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });


    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });

    //Barfiller 
    $(".progress-bar-area").appear(function () {
        $('#bar1').barfiller({
            duration: 2500,
        });
        $('#bar2').barfiller({
            duration: 2500,
        });
        $('#bar3').barfiller({
            duration: 2500,
        });
        $('#bar4').barfiller({
            duration: 2500,
        });
    });

    $('.js-tilt').tilt({
        perspective: 1500,
    })

    // Fun Facts Area
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

})(jQuery);


// section add/remove
$(document).ready(function () {

    $('.design').on('click', function () {
        // $(this).addClass('d-none');

        $("#designSection").removeClass('d-none');
        // $(".design").addClass('btn btn-success');

        $("#readySection").addClass('d-none');

        // $(".readystock").toggleClass('btn btn-success btn btn-outlier-success');
        $(".readystock").removeClass('btn btn-success');
        $(".readystock").addClass('btn btn-outline-success');
    });


    $('.readystock').on('click', function () {

        $("#readySection").removeClass('d-none');
        $(".readystock").removeClass('btn btn-outline-success');
        $(".readystock").addClass('btn btn-success');
        // $(".design").toggleClass('btn btn-success btn btn-outline-success');
        $(".design").removeClass('btn btn-success');
        $(".design").addClass('btn btn-outline-success');
        $("#designSection").addClass('d-none');

    });


    // $('.design').click(function () {

    //     // console.log('Button clicked');
    //     let designSection = $("#designSection");
    //     console.log(designSection);

    //     let designSection_tr = designSection.hasClass('d-none');
    //     console.log(designSection_tr);


    //     let readySection = $("#readySection");
    //     console.log(readySection);
    //     let readySection_tr = readySection.hasClass('d-none');
    //     console.log(readySection_tr);


    //     if (designSection_tr) {
    //         designSection.removeClass('d-none');
    //         readySection.addClass('d-none');
    //     }
    //     else {
    //         designSection.addClass('d-none');
    //         readySection.removeClass('d-none');
    //     }

    // });

    // $(document).ready(function () {
    //     $('.readystock').click(function () {

    //         // console.log('Button clicked');

    //         let readySection = $("#readySection");
    //         console.log(readySection);
    //         let readySection_tr = readySection.hasClass('d-none');

    //         let designSection = $("#designSection");
    //         console.log(designSection);
    //         let designSection_tr = designSection.hasClass('d-none');

    //         if (readySection_tr) {
    //             readySection.removeClass('d-none');
    //             designSection.addClass('d-none');

    //         }
    //         else {
    //             readySection.addClass('d-none');
    //             designSection.removeClass('d-none');
    //         }

    //     });



    // Image slide1
    var $mainImage1 = $("#mainImage1");
    var $prevButton1 = $(".prev1");
    var $nextButton1 = $(".next1");
    var imageList1 = ["assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/1.png", "assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/2.png", "assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/3.png", "assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/4.png", "assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/5.png", "assets_topmost/images/topmost_recent_imges/Man's_Original _sweatshirt/6.png"];
    var currentImage1 = 0;

    function showImage(index1) {
        $mainImage1.attr("src", imageList1[index1]);
    }

    $prevButton1.on("click", function () {
        currentImage1--;
        if (currentImage1 < 0) {
            currentImage1 = imageList1.length - 1;
        }
        showImage(currentImage1);
    });

    $nextButton1.on("click", function () {
        currentImage1++;
        if (currentImage1 >= imageList1.length) {
            currentImage1 = 0;
        }
        showImage(currentImage1);
    });








    // select the `.multi_image` element
    var $multi_image1 = $(".multi_img1");

    // array of child images to be added
    var childList1 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList1, function (index1, src1) {

        // console.log(src);
        // Create a new img element
        let newimgElement1 = $("<img>");
        newimgElement1.attr('src', src1);
        newimgElement1.attr('height', '50');
        newimgElement1.attr('width', '50');
        newimgElement1.attr('alt', 'Image');
        console.log(newimgElement1);

        $multi_image1.append(newimgElement1);

    });

    // console.log($multi_image);
    // console.log('Mimi');


    // select the `.multi_image` element
    var $multi_image2 = $(".multi_img2");

    // array of child images to be added
    var childList2 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList2, function (index2, src2) {

        // console.log(src);
        // Create a new img element
        let newimgElement2 = $("<img>");
        newimgElement2.attr('src', src2);
        newimgElement2.attr('height', '50');
        newimgElement2.attr('width', '50');
        newimgElement2.attr('alt', 'Image');
        console.log(newimgElement2);

        $multi_image2.append(newimgElement2);

    });



    // select the `.multi_image` element
    var $multi_image3 = $(".multi_img3");

    // array of child images to be added
    var childList3 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList3, function (index3, src3) {

        // console.log(src);
        // Create a new img element
        let newimgElement3 = $("<img>");
        newimgElement3.attr('src', src3);
        newimgElement3.attr('height', '50');
        newimgElement3.attr('width', '50');
        newimgElement3.attr('alt', 'Image');
        console.log(newimgElement3);

        $multi_image3.append(newimgElement3);

    });



    // select the `.multi_image` element
    var $multi_image4 = $(".multi_img4");

    // array of child images to be added
    var childList4 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList4, function (index4, src4) {

        // console.log(src);
        // Create a new img element
        let newimgElement4 = $("<img>");
        newimgElement4.attr('src', src4);
        newimgElement4.attr('height', '50');
        newimgElement4.attr('width', '50');
        newimgElement4.attr('alt', 'Image');
        console.log(newimgElement4);

        $multi_image4.append(newimgElement4);

    });

    // select the `.multi_image` element
    var $multi_image5 = $(".multi_img5");

    // array of child images to be added
    var childList5 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList5, function (index5, src5) {

        // console.log(src);
        // Create a new img element
        let newimgElement5 = $("<img>");
        newimgElement5.attr('src', src5);
        newimgElement5.attr('height', '50');
        newimgElement5.attr('width', '50');
        newimgElement5.attr('alt', 'Image');
        console.log(newimgElement5);

        $multi_image5.append(newimgElement5);

    });



    // select the `.multi_image` element
    var $multi_image6 = $(".multi_img6");

    // array of child images to be added
    var childList6 = ["assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png", "assets_topmost/images/prod/p1.png"];

    // loop through the `childList` array and append child images to the `.multi_image` element
    $.each(childList6, function (index6, src6) {

        // console.log(src);
        // Create a new img element
        let newimgElement6 = $("<img>");
        newimgElement6.attr('src', src6);
        newimgElement6.attr('height', '50');
        newimgElement6.attr('width', '50');
        newimgElement6.attr('alt', 'Image');
        console.log(newimgElement6);

        $multi_image6.append(newimgElement6);

    });



});



$(document).ready(function () {
    // Image slide2
    var $mainImage2 = $("#mainImage2");
    var $prevButton2 = $(".prev2");
    var $nextButton2 = $(".next2");
    var imageList2 = ["assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/1.png", "assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/2.png", "assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/3.png", "assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/4.png", "assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/4.png", "assets_topmost/images/topmost_recent_imges/boys_and_girls_top_bottom_set/6.png"];
    var currentImage2 = 0;

    function showImage(index2) {
        $mainImage2.attr("src", imageList2[index2]);
    }

    $prevButton2.on("click", function () {
        currentImage2--;
        if (currentImage2 < 0) {
            currentImage2 = imageList2.length - 1;
        }
        showImage(currentImage2);
    });

    $nextButton2.on("click", function () {
        currentImage2++;
        if (currentImage2 >= imageList2.length) {
            currentImage2 = 0;
        }
        showImage(currentImage2);
    });

});


$(document).ready(function () {
    // Image slide3
    var $mainImage3 = $("#mainImage3");
    var $prevButton3 = $(".prev3");
    var $nextButton3 = $(".next3");
    var imageList3 = ["assets_topmost/images/topmost_recent_imges/mans_sentu_genji/1.png", "assets_topmost/images/topmost_recent_imges/mans_sentu_genji/2.png", "assets_topmost/images/topmost_recent_imges/mans_sentu_genji/3.png", "assets_topmost/images/topmost_recent_imges/mans_sentu_genji/4.png"];
    var currentImage3 = 0;

    function showImage(index3) {
        $mainImage3.attr("src", imageList3[index3]);
    }

    $prevButton3.on("click", function () {
        currentImage3--;
        if (currentImage3 < 0) {
            currentImage3 = imageList3.length - 1;
        }
        showImage(currentImage3);
    });

    $nextButton3.on("click", function () {
        currentImage3++;
        if (currentImage3 >= imageList3.length) {
            currentImage3 = 0;
        }
        showImage(currentImage3);
    });

});

$(document).ready(function () {
    //  Image slide4
    var $mainImage4 = $("#mainImage4");
    var $prevButton4 = $(".prev4");
    var $nextButton4 = $(".next4");
    var imageList4 = ["assets_topmost/images/topmost_recent_imges/boys_orginal_joggers/1.png", "assets_topmost/images/topmost_recent_imges/boys_orginal_joggers/2.png", "assets_topmost/images/topmost_recent_imges/boys_orginal_joggers/3.png", "assets_topmost/images/topmost_recent_imges/boys_orginal_joggers/4.png"];
    var currentImage4 = 0;

    function showImage(index4) {
        $mainImage4.attr("src", imageList4[index4]);
    }

    $prevButton4.on("click", function () {
        currentImage4--;
        if (currentImage4 < 0) {
            currentImage4 = imageList4.length - 1;
        }
        showImage(currentImage4);
    });

    $nextButton4.on("click", function () {
        currentImage4++;
        if (currentImage4 >= imageList4.length) {
            currentImage4 = 0;
        }
        showImage(currentImage4);
    });

});


$(document).ready(function () {
    // Image slide5
    var $mainImage5 = $("#mainImage5");
    var $prevButton5 = $(".prev5");
    var $nextButton5 = $(".next5");
    var imageList5 = ["assets_topmost/images/topmost_recent_imges/mans_denim_pant/1.png", "assets_topmost/images/topmost_recent_imges/mans_denim_pant/2.png", "assets_topmost/images/topmost_recent_imges/mans_denim_pant/3.png", "assets_topmost/images/topmost_recent_imges/mans_denim_pant/4.png", "assets_topmost/images/topmost_recent_imges/mans_denim_pant/5.png", "assets_topmost/images/topmost_recent_imges/mans_denim_pant/6.png"];
    var currentImage5 = 0;

    function showImage(index5) {
        $mainImage5.attr("src", imageList5[index5]);
    }

    $prevButton5.on("click", function () {
        currentImage5--;
        if (currentImage5 < 0) {
            currentImage5 = imageList5.length - 1;
        }
        showImage(currentImage5);
    });

    $nextButton5.on("click", function () {
        currentImage5++;
        if (currentImage5 >= imageList5.length) {
            currentImage5 = 0;
        }
        showImage(currentImage5);
    });

});

$(document).ready(function () {
    //  Image slide6
    var $mainImage6 = $("#mainImage6");
    var $prevButton6 = $(".prev6");
    var $nextButton6 = $(".next6");
    var imageList6 = ["assets_topmost/images/topmost_recent_imges/mans_sport_sleeve_tshirt/1.png", "assets_topmost/images/topmost_recent_imges/mans_sport_sleeve_tshirt/2.png", "assets_topmost/images/topmost_recent_imges/mans_sport_sleeve_tshirt/3.png", "assets_topmost/images/topmost_recent_imges//mans_sport_sleeve_tshirt/4.png", "assets_topmost/images/topmost_recent_imges//mans_sport_sleeve_tshirt/5.png"];
    var currentImage6 = 0;

    function showImage(index6) {
        $mainImage6.attr("src", imageList6[index6]);
    }

    $prevButton6.on("click", function () {
        currentImage6--;
        if (currentImage6 < 0) {
            currentImage6 = imageList6.length - 1;
        }
        showImage(currentImage6);
    });

    $nextButton6.on("click", function () {
        currentImage6++;
        if (currentImage6 >= imageList6.length) {
            currentImage6 = 0;
        }
        showImage(currentImage6);
    });


});

$(document).ready(function () {
    //  Image slide7
    var $mainImage7 = $("#mainImage7");
    var $prevButton7 = $(".prev7");
    var $nextButton7 = $(".next7");
    var imageList7 = ["assets_topmost/images/topmost_recent_imges/mans_orginal_sports_tshirt/1.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_sports_tshirt/2.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_sports_tshirt/3.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_sports_tshirt/4.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_sports_tshirt/5.png"];
    var currentImage7 = 0;

    function showImage(index7) {
        $mainImage7.attr("src", imageList7[index7]);
    }

    $prevButton7.on("click", function () {
        currentImage7--;
        if (currentImage7 < 0) {
            currentImage7 = imageLis7.length - 1;
        }
        showImage(currentImage7);
    });

    $nextButton7.on("click", function () {
        currentImage7++;
        if (currentImage7 >= imageList7.length) {
            currentImage7 = 0;
        }
        showImage(currentImage7);
    });


});

$(document).ready(function () {
    //  Image slide8
    var $mainImage8 = $("#mainImage8");
    var $prevButton8 = $(".prev8");
    var $nextButton8 = $(".next8");
    var imageList8 = ["assets_topmost/images/topmost_recent_imges/ledis_viscos_top/1.png", "assets_topmost/images/topmost_recent_imges/ledis_viscos_top/2.png", "assets_topmost/images/topmost_recent_imges/ledis_viscos_top/3.png", "assets_topmost/images/topmost_recent_imges/ledis_viscos_top/4.png"];
    var currentImage8 = 0;

    function showImage(index8) {
        $mainImage8.attr("src", imageList8[index8]);
    }

    $prevButton8.on("click", function () {
        currentImage8--;
        if (currentImage8 < 0) {
            currentImage8 = imageLis8.length - 1;
        }
        showImage(currentImage8);
    });

    $nextButton8.on("click", function () {
        currentImage8++;
        if (currentImage8 >= imageList8.length) {
            currentImage8 = 0;
        }
        showImage(currentImage8);
    });


});

$(document).ready(function () {
    //  Image slide9
    var $mainImage9 = $("#mainImage9");
    var $prevButton9 = $(".prev9");
    var $nextButton9 = $(".next9");
    var imageList9 = ["assets_topmost/images/topmost_recent_imges/mans_hoody_padding_jacket/1.png", "assets_topmost/images/topmost_recent_imges/mans_hoody_padding_jacket/2.png", "assets_topmost/images/topmost_recent_imges/mans_hoody_padding_jacket/3.png", "assets_topmost/images/topmost_recent_imges/mans_hoody_padding_jacket/4.png", "assets_topmost/images/topmost_recent_imges/mans_hoody_padding_jacket/5.png"];
    var currentImage9 = 0;

    function showImage(index9) {
        $mainImage9.attr("src", imageList9[index9]);
    }

    $prevButton9.on("click", function () {
        currentImage9--;
        if (currentImage9 < 0) {
            currentImage9 = imageList9.length - 1;
        }
        showImage(currentImage9);
    });

    $nextButton9.on("click", function () {
        currentImage9++;
        if (currentImage9 >= imageList9.length) {
            currentImage9 = 0;
        }
        showImage(currentImage9);
    });


});

$(document).ready(function () {
    //  Image slide10
    var $mainImage10 = $("#mainImage10");
    var $prevButton10 = $(".prev10");
    var $nextButton10 = $(".next10");
    var imageList10 = ["assets_topmost/images/topmost_recent_imges/kids_jacket/1.png", "assets_topmost/images/topmost_recent_imges/kids_jacket/2.png", "assets_topmost/images/topmost_recent_imges/kids_jacket/3.png", "assets_topmost/images/topmost_recent_imges/kids_jacket/4.png", "assets_topmost/images/topmost_recent_imges/kids_jacket/5.png", "assets_topmost/images/topmost_recent_imges/kids_jacket/6.png"];
    var currentImage10 = 0;

    function showImage(index10) {
        $mainImage10.attr("src", imageList10[index10]);
    }

    $prevButton10.on("click", function () {
        currentImage10--;
        if (currentImage10 < 0) {
            currentImage10 = imageList10.length - 1;
        }
        showImage(currentImage10);
    });

    $nextButton10.on("click", function () {
        currentImage10++;
        if (currentImage10 >= imageList10.length) {
            currentImage10 = 0;
        }
        showImage(currentImage10);
    });


});
// ledis_viscos_top
// ledis_viscos_top
$(document).ready(function () {
    //  Image slide11
    var $mainImage11 = $("#mainImage11");
    var $prevButton11 = $(".prev11");
    var $nextButton11 = $(".next11");
    var imageList11 = ["assets_topmost/images/topmost_recent_imges/ledis_orginal_cardigan/1.png", "assets_topmost/images/topmost_recent_imges/ledis_orginal_cardigan/2.png", "assets_topmost/images/topmost_recent_imges/ledis_orginal_cardigan/3.png", "assets_topmost/images/topmost_recent_imges/ledis_orginal_cardigan/4.png", "assets_topmost/images/topmost_recent_imges/ledis_orginal_cardigan/5.png"];
    var currentImage11 = 0;

    function showImage(index11) {
        $mainImage11.attr("src", imageList11[index11]);
    }

    $prevButton11.on("click", function () {
        currentImage11--;
        if (currentImage11 < 0) {
            currentImage11 = imageList11.length - 1;
        }
        showImage(currentImage11);
    });

    $nextButton11.on("click", function () {
        currentImage11++;
        if (currentImage11 >= imageList11.length) {
            currentImage11 = 0;
        }
        showImage(currentImage11);
    });


});

$(document).ready(function () {
    //  Image slide12
    var $mainImage12 = $("#mainImage12");
    var $prevButton12 = $(".prev12");
    var $nextButton12 = $(".next12");
    var imageList12 = ["assets_topmost/images/topmost_recent_imges/mans_orginal_jack_and_jones/2.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_jack_and_jones/3.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_jack_and_jones/4.png", "assets_topmost/images/topmost_recent_imges/mans_orginal_jack_and_jones/5.png"];
    var currentImage12 = 0;

    function showImage(index12) {
        $mainImage12.attr("src", imageList12[index12]);
    }

    $prevButton12.on("click", function () {
        currentImage12--;
        if (currentImage12 < 0) {
            currentImage12 = imageList12.length - 1;
        }
        showImage(currentImage12);
    });

    $nextButton12.on("click", function () {
        currentImage12++;
        if (currentImage12 >= imageList12.length) {
            currentImage12 = 0;
        }
        showImage(currentImage12);
    });

});



$(document).ready(function () {
    //  Image slide13
    var $mainImage13 = $("#mainImage13");
    var $prevButton13 = $(".prev13");
    var $nextButton13 = $(".next13");
    var imageList13 = ["assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve1.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve2.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve3.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve4.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve5.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve6.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve7.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve8.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve9.png", "ladies_full_sleeve_topbottom_set/full_sleeve10.png"];
    var currentImage13 = 0;

    function showImage(index13) {
        $mainImage13.attr("src", imageList13[index13]);
    }

    $prevButton13.on("click", function () {
        currentImage13--;
        if (currentImage13 < 0) {
            currentImage13 = imageList13.length - 1;
        }
        showImage(currentImage13);
    });

    $nextButton13.on("click", function () {
        currentImage13++;
        if (currentImage13 >= imageList13.length) {
            currentImage13 = 0;
        }
        showImage(currentImage13);
    });

});


$(document).ready(function () {
    //  Image slide14
    var $mainImage14 = $("#mainImage14");
    var $prevButton14 = $(".prev14");
    var $nextButton14 = $(".next14");
    var imageList14 = ["assets_topmost/images/all_img/ladies_half_sleeve_topbottom_set/half_sleeve1.png", "assets_topmost/images/all_img/ladies_half_sleeve_topbottom_set/half_sleeve2.png", "assets_topmost/images/all_img/ladies_half_sleeve_topbottom_set/half_sleeve3.png", "assets_topmost/images/all_img/ladies_half_sleeve_topbottom_set/half_sleeve4.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve5.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/half_sleeve6.png", "assets_topmost/images/all_img/ladies_half_sleeve_topbottom_set/half_sleeve7.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve8.png", "assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/half_sleeve9.png", "ladies_half_sleeve_topbottom_set/half_sleeve10.png"];
    var currentImage14 = 0;

    function showImage(index14) {
        $mainImage14.attr("src", imageList14[index14]);
    }

    $prevButton14.on("click", function () {
        currentImage14--;
        if (currentImage14 < 0) {
            currentImage14 = imageList14.length - 1;
        }
        showImage(currentImage14);
    });

    $nextButton14.on("click", function () {
        currentImage14++;
        if (currentImage14 >= imageList14.length) {
            currentImage14 = 0;
        }
        showImage(currentImage14);
    });

});

// $(document).ready(function () {

// // show more products
//     let show_more = $('.show_more');
//     show_more.on("click", function () {
//         show_more.html("Show Less");
//         show_more.addClass('btn btn-warning');

//         var hide_products = $('.hide_products');
//         var hide_products_present_class = hide_products.hasClass('d-none');

//         // console.log(obj);
//         // console.log(hide_products);

//         if (hide_products_present_class) {

//             hide_products.removeClass('d-none');
//         }
//         else {
//             hide_products.addClass('d-none');
//         }


//     });

// });


// $(document).ready(function () {

// let select_filter = $('.select_filter');
// console.log(select_filter);
// let allOption = select_filter[0].children;
// // console.log("select_filter", select_filter[0].children);

// for (let i = 0; i < allOption.length; i++) {
//     const element = allOption[i];
// console.log(element.value);
// element.on('click', function () {
//     console.log("click");
// })

// let male = $('.male');
// console.log(male);

// let female = $('.female');
// console.log(female);


// let tr = element.value == "male_product";
// console.log(tr);
// // let tr1 = filtering_value == "female_products"
// // console.log(tr1);


// if (element.value == "male_products") {

//     female.addClass('d-none');
// }


// if (element.value == "female_products") {
//     female.removeClass('d-none');
// }

// }



$(document).ready(function () {

    $('.filtering').on('change', function (e) {


        console.log(e);  //select overall obj
        var selectedValue = $(this).val();  //getting select option tags value
        console.log(selectedValue);  //male_products or female_products


        let male = $('.male');

        let female = $('.female');


        if (selectedValue == "female_Products") {

            $.each(male, function (index, value) {
                $(value).addClass('d-none');
            });


            $.each(female, function (index, value2) {
                $(value2).removeClass('d-none');
            });

        }


        if (selectedValue == "male_Products") {

            $.each(female, function (index, value2) {
                $(value2).addClass('d-none');
            });

            $.each(male, function (index, value) {
                // console.log(value);
                $(value).removeClass('d-none');
            });
        }

    });


    $('.select_filterr').on('change', function (event) {


        console.log(event);  //select overall obj
        var selectedValuee = $(this).val();  //getting select option tags value
        console.log(selectedValuee);  //male_products or female_products

        let summer = $('.summer');
        console.log(summer);

        let fall = $('.fall');
        console.log(fall);

        let spring = $('.spring');
        console.log(spring);

        if (selectedValuee == "summer_products") {
            // console.log('summer mine');

            $.each(summer, function (index, value3) {
                $(value3).removeClass('d-none');
            });

            $.each(spring, function (index, value4) {
                $(value4).addClass('d-none');
            });
            $.each(fall, function (index, value5) {
                $(value5).addClass('d-none');
            });

        }

        if (selectedValuee == "spring_products") {
            // console.log('spring mine');

            $.each(spring, function (index, value9) {
                $(value9).removeClass('d-none');
            });

            $.each(summer, function (index, value10) {
                $(value10).addClass('d-none');
            });
            $.each(fall, function (index, value11) {
                $(value11).addClass('d-none');
            });
        }


        if (selectedValuee == "fall_products") {
            // console.log('fall mine');
            $.each(fall, function (index, value6) {
                $(value6).removeClass('d-none');
            });

            $.each(spring, function (index, value7) {
                $(value7).addClass('d-none');
            });
            $.each(summer, function (index, value8) {
                $(value8).addClass('d-none');
            });
        }

    });

});


// $(document).ready(function () {
//     var container = $('.container');
//     var parent = $('.secondary_images_parent');
//     var plus = $('.plus_btn');

//     plus.on('click', function (event) {
//         var div = $('<div>').addClass('col-12 col-md-8 col-ld-8 col-xl-8 form-group text-uppercase mb-5');

//         var label = $('<label>').attr({
//             'for': 'secondary_image',
//             'class': 'mb-2'
//         }).text('Secondary Product Image');

//         var input = $('<input>').attr({
//             'type': 'file',
//             'class': 'form-control-file',
//             'id': 'secondary_image',
//             'name': 'secondary_image',
//             'placeholder': 'Enter Secondary Product Image',
//             'required': ''
//         });

//         div.append(label);
//         div.append(input);

//         parent.append(div);
//         console.log(parent);
//     });
// });










