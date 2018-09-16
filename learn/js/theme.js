jQuery('document').ready(function ($) {

    /* ====================================
     * Global Variables
     * ==================================== */
    var $window = $(window);

    $('[data-scrollTo]').on('click', function (e) {
        var target = $(this).attr('data-scrollTo');
        scrollTo(target);
        e.preventDefault();
    });
    $('#backtotop').on('click', function () {
        scrollTo(0);
    });
    $('.next-section').on('click', function () {
        var $btn = $(this);
        var $parent = $btn.parents('section');
        var parentindex = $('section').index($parent);
        var $nextparent = $('section').eq(parentindex + 1);
        scrollTo($nextparent);
    });


    /* ====================================
     * Animation
     * ==================================== */
    if ($('[data-animate]').length > 0) {
        if (jQuery.browser.mobile) {
            $('[data-animate]').addClass('animated-visible');
        } else {
            $window.scroll(function (e) {
                animate();
            }).trigger('scroll');
        }
    }

    /* ====================================
     * Parallax
     * ==================================== */
    if ($('.parallax').length > 0) {
        $window.scroll(function (e) {
            parallax();
        }).trigger('scroll');
        $window.resize(function () {
            parallax();
        }).trigger('resize')
    }

    /* ====================================
     * Navbar Classes
     * ==================================== */
    var $navbar = $('.navbar');

    if ($navbar.length > 0) {
        var isOverlay = $navbar.hasClass('navbar-overlay');
        var isCondense = $navbar.attr('data-condense') == 'true';

        $window.on('scroll', function () {
            var scroll = $window.scrollTop();

            if (scroll > 50) {
                if (isOverlay)
                    $navbar.removeClass('navbar-overlay')
                if (isCondense)
                    $navbar.addClass('navbar-condensed')
            } else {
                if (isOverlay)
                    $navbar.addClass('navbar-overlay')
                if (isCondense)
                    $navbar.removeClass('navbar-condensed')
            }
        });
    }

    var refresh_cover_half;
    $window.resize(function () {
        clearTimeout(refresh_cover_half);
        refresh_cover_half = setTimeout(resize_cover_half, 100);
    })

    function resize_cover_half() {
        $('.img-cover-half').each(function () {
            var $parent = $(this).parent();
            var height = $(this).height();
            var pheight = $parent.height();

            if (pheight > height)
                $(this).removeClass('img-fullwidth').addClass('img-fullheight')
            else
                $(this).removeClass('img-fullheight').addClass('img-fullwidth')
        })
    }


    var $contact_validation = $('#contact-validation');
    var validation_number_1 = Math.floor((Math.random() * 10) + 1);
    var validation_number_2 = Math.floor((Math.random() * 10) + 1);
    var validation = validation_number_1 + validation_number_2;
    $contact_validation.attr('placeholder', validation_number_1 + ' + ' + validation_number_2 + ' = ?')

    $('.contact-form-submit').on('click', function () {
        var $contact_form = $('#contact-form');
        var contact = $contact_form.serialize();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var validation_input = $contact_validation.val();

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name == '' ||
            email == '' ||
            message == '' ||
            validation_input == '') {
            alert('Please provide all the required details.')
        } else if(!re.test(email) ){
            alert('The email address you entered is invalid.');
        } else if (validation_input != validation) {
            alert('Your validation input is incorrect. How much is ' + validation_number_1 + ' + ' + validation_number_2 + '?')
        } else {
            $.ajax({
                type: 'POST',
                url: $contact_form.attr('action'),
                data: contact,
                success: function (data) {
                    if (data == 1) {
                        $('h1', $contact_form).text('Your message has been sent!')
                    } else {
                        alert('We\'re sorry! Something went wrong. Error: ' + data)
                    }
                }
            })
        }

        return false;
    })


});