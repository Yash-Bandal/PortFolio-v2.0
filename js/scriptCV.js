// Disable Right-Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable Keyboard Shortcuts
document.onkeydown = function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U') || 
        (e.ctrlKey && e.key === 'S') || 
        (e.ctrlKey && e.key === 'H') || 
        (e.ctrlKey && e.key === 'A')) {
        e.preventDefault();
        return false;
    }
};

var magnets2 = document.querySelectorAll('.magneticCV');
var strength2 = 50;

magnets2.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnetCV);
    magnet.addEventListener('mouseout', function(event) {
        gsap.to(event.currentTarget, {duration: 1, x: 0, y: 0, ease: "power4.out"});
    });
});

function moveMagnetCV(event) {
    var magnetButtonCV = event.currentTarget;
    var bounding = magnetButtonCV.getBoundingClientRect();

    gsap.to(magnetButtonCV, {
        duration: 1,
        x: (((event.clientX - bounding.left) / magnetButtonCV.offsetWidth) - 0.5) * strength2,
        y: (((event.clientY - bounding.top) / magnetButtonCV.offsetHeight) - 0.5) * strength2,
        ease: "power4.out"
    });
}

// Initialize ScrollReveal
function initScrollReveal() {
    const sr = ScrollReveal();
    
    sr.reveal('.top-headerABT', {});
    sr.reveal('.aboutABT-info', { origin: 'left', distance: '80px', duration: 2000, reset: true, delay: 100 });
    sr.reveal('.contact-info', { origin: 'left', distance: '80px', duration: 2000, reset: true, delay: 100 });
    sr.reveal('.skills-box', { origin: 'right', distance: '80px', duration: 2000, reset: true, delay: 100 });
    sr.reveal('.form-control', { origin: 'right', distance: '80px', duration: 2000, reset: true, delay: 100 });
}
``
