document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Top Header ABT Animation
    gsap.from('.top-headerABT', {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.top-headerABT',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // About ABT Info Animation
    gsap.from('.aboutABT-info', {
        x: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutABT-info',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // Skills Box Animation
    gsap.from('.skills-box', {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutABT-info',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // Education Card Wrapper Animation
    gsap.utils.toArray('.education-card-wrapper').forEach(card => {
        gsap.from(card.querySelector('.education-card'), {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: -200,
            duration: 1,
        });

        // Uncomment if needed
        // gsap.to(card.querySelector('.education-card-border'), {
        //     scrollTrigger: {
        //         trigger: card,
        //         start: 'top 80%',
        //         end: 'bottom 60%',
        //         toggleActions: 'play none none reverse',
        //     },
        //     opacity: 1,
        //     duration: 2,
        // });
    });

    // Top Header ABT1 Animation
    gsap.from('.top-headerABT1', {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.top-headerABT1',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // About Containers Animation
    gsap.from('.about-containers', {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-containers',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });
});
