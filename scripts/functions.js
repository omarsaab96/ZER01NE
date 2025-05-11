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


});



