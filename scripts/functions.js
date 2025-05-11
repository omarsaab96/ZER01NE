$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        smooth: 1, // seconds
        effects: true
    });

    ScrollTrigger.create({
        trigger: ".heroSection",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
    });

    AOS.init({ once: true });

    particlesJS('particles-js', {
        particles: {
            number: { value: 100 },
            color: { value: '#00F6FF' },
            shape: { type: 'circle' },
            opacity: { value: 0.2 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 300,
                color: '#222222',
                opacity: 0.2,
                width: 2
            },
            move: { enable: true, speed: 1 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 50, duration: 0.4 } }
        },

    });

    $('.marquee-slider').marqueeSlider([
        { sensitivity: 0.1, repeatItems: true },
    ]);

    const animation = lottie.loadAnimation({
        container: document.getElementById('myLottieAnimation'), // the DOM element
        renderer: 'svg', // 'svg', 'canvas', or 'html'
        loop: true, // set to false if you don’t want it to loop
        autoplay: true, // set to false if you want to control it manually
        path: 'images/animation3.json' // your animation file path
    });

    const animation2 = lottie.loadAnimation({
        container: document.getElementById('myLottieAnimation2'), // the DOM element
        renderer: 'svg', // 'svg', 'canvas', or 'html'
        loop: true, // set to false if you don’t want it to loop
        autoplay: true, // set to false if you want to control it manually
        path: 'images/animation4.json' // your animation file path
    });

    const animation3 = lottie.loadAnimation({
        container: document.getElementById('myLottieAnimation3'), // the DOM element
        renderer: 'svg', // 'svg', 'canvas', or 'html'
        loop: true, // set to false if you don’t want it to loop
        autoplay: true, // set to false if you want to control it manually
        path: 'images/animation5.json', // your animation file path,
    });


    $('.navlink').click(function () {
        $('html, body').animate({
            scrollTop: $('.' + $(this).data('section') + '').offset().top - 200
        }, 1000);
    })

    $('.learnAboutUs').click(function () {
        $('html, body').animate({
            scrollTop: $('.aboutSection').offset().top - 200
        }, 1000);
    })


    setTimeout(function () {
        $('.loaderDiv').fadeOut();
    }, 2000);


    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (!name) {
            $('#name').addClass('error')
            return false;
        }
        if (!email) {
            $('#email').addClass('error')
            return false;
        }
        if (!message) {
            $('#message').addClass('error')
            return false;
        }

        $('.loaderDiv').fadeIn();
        $.ajax({
            url: '/scripts/contact.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name, email, message }),
            success: function (response) {
                if (response.success) {
                    $('#contactForm')[0].reset();
                    $('#name, #email, #message').removeClass('error');
                    $('#contactForm').slideUp();
                    $('.swalContainer').slideDown();
                    
                } else {
                    alert('Error: ' + (response.error || 'Email failed to send.'));
                }
            },
            error: function () {
                alert('Something went wrong. Please try again later.');
            }

        });

        $('.loaderDiv').fadeOut();
    });

    $('#custom-swal-close').on('click', function () {
        $('#contactForm').slideDown();
        $('.swalContainer').slideUp();
    });
});



