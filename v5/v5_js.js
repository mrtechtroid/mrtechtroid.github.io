window.addEventListener("DOMContentLoaded", () => {ScrollTrigger.refresh();}); 

import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";
let a = 0, b = 0, c = 0, d = 0
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
const Triggers = document.querySelectorAll(".trigger");
const Triggers2 = document.querySelectorAll(".project-card")
Triggers.forEach(addTimeline);
Triggers2.forEach(addTimeline2)
function addTimeline(text, index) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            start: "center bottom",
            ease: "power2",
            toggleActions: "play none none reverse"
        }
    }).from(text, {
        x: -200,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2
    });
}
function addTimeline2(text, index) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            start: "center bottom",
            ease: "power2",
            toggleActions: "play none none reverse"
        }
    }).from(text, {
        y: -100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
    },"-=0.1");
}
ScrollTrigger.refresh()
app.load("scene.splinecode", undefined, { credentials: 'include', mode: 'no-cors' }).then(() => {
    const exportcamera = app.findObjectByName("Export");
    ScrollTrigger.create({
        trigger: "#landing",
        start: "-50% top",
        end: "+=100%",
        onEnter: self => { a += 1; app.setVariable("Number", a); },
        onEnterBack: self => { a += 1; app.setVariable("Number", a); }
    });
    ScrollTrigger.create({
        trigger: "#aboutme",
        start: "-50% top",
        end: "+=100%",
        onEnter: self => { b += 1; app.setVariable("Number 3", b); },
        onEnterBack: self => { b += 1; app.setVariable("Number 3", b); }
    });
    ScrollTrigger.create({
        trigger: "#projects",
        start: "0% top",
        end: "+=100%",
        onEnter: self => { c += 1; app.setVariable("Number 2", c); },
        onEnterBack: self => { c += 1; app.setVariable("Number 2", c); }
    });
    ScrollTrigger.create({
        trigger: "#contactme",
        start: "-30% top",
        end: "+=100%",
        onEnter: self => { console.log("d"); d += 1; app.setVariable("Number 4", d); },
        onEnterBack: self => { console.log("d"); d += 1; app.setVariable("Number 4", d); }
    });
    removebackground()
    ScrollTrigger.refresh()
});