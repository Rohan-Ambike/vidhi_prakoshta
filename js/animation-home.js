gsap.registerPlugin(ScrollTrigger);


// Array for fade Inside animations
let fadeInAnimations = [
    { class: ".hero", x: -200, delay: 0.5, markers: false },
    { class: "#about2", x: -200, delay: 0.5, markers: false },
    { class: "#contact", x: -200, delay: 0.5, markers: false },
    { class: ".footer", x: -200, delay: 0.5, markers: false, start: "top 85%" },

];

fadeInAnimations.forEach(({ class: selector, x, y, duration, delay, start, end, markers }) => {
    gsap.from(selector, {
        opacity: 0,
        x: x || undefined,
        y: y || undefined,
        duration: duration || 0.5,
        delay: delay,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: start || "top 70%",
            end: end || "top 20%",
            markers: markers || false,
        },
    });
});

// // Array for Scale animations
let scaleAnimations = [
    { class: "#about1", y: 100, delay: 0.5, markers: false },
    { class: "#about3", y: 100, delay: 0.5, markers: false },
    { class: "#alternate1", y: 100, delay: 0.5, markers: false },
    { class: "#alternate2", y: 100, delay: 0.5, markers: false },
    { class: "#alternate3", y: 100, delay: 0.5, markers: false },
    { class: "#alternate4", y: 100, delay: 0.5, markers: false },
    { class: ".swiper", y: 100, delay: 0.5, markers: false },


];

scaleAnimations.forEach(({ class: selector, x, y, delay, start, end, markers }) => {
    gsap.from(selector, {
        opacity: 0,
        scale: 0.5,
        x: x || undefined,
        y: y || undefined,
        duration: 0.5,
        delay: delay,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: start || "top 80%",
            end: end || "top 20%",
            markers: markers || false,
        },
    });
});


