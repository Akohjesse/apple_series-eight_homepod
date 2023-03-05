import Splitting from "splitting";
import { IO } from "./observe";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const split = () => {
    const p = document.querySelectorAll("[data-animation='paragraph']");
    const H = document.querySelectorAll("[data-animation='header']");
    const f = document.querySelectorAll("[data-animation='fadeInOut']");
    p.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
        IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });
        });
    });

    H.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
            });
        });
    });

    f.forEach((item) => {
        gsap.set(item, {
            autoAlpha: 0,
            yPercent: 50,
            transformStyle: "preserve-3d",
        });
        gsap.to(item, {
            autoAlpha: 1,
            yPercent: 0,
            duration: item.length > 100 ? 0.7 : 0.6,
            ease: "easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top center",
                end: "+=300",
                scrub: true,
                ease: "circ.easeOut",
                toggleAttribute: "play play reverse reverse",
            },
        });
    });
};
