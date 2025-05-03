$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
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
});
