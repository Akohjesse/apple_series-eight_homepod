import gsap from "gsap";
import "./index.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function homeblack() {
    useEffect(() => {
        gsap.set(".homeBlack_iph img", {
            yPercent: 50,
            autoAlpha: 0,
        });
        gsap.to(".homeBlack_iph img", {
            yPercent: 0,
            duration: 2,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".homeBlack_iph",
                start: "top center",
                end: "bottom bottom",
                ease: "ease-in-out",
                scrub: true,
            },
        });
        gsap.set(".homeBlack_pods .img", {
            autoAlpha: 0,
        });
        gsap.to(".homeBlack_pods .img", {
            autoAlpha: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".homeBlack_pods",
                start: "top center",
                end: "bottom bottom",
                ease: "ease-out",
            },
        });
    });
    return (
        <div className="homeBlack">
            <div className="homeBlack_video">
                <video
                    muted
                    playsInline
                    loop
                    autoPlay
                    src="/assets/homepod.mp4"
                ></video>
                <div className="homeBlack_video_txt lr child_wrap">
                    <h3 data-animation="header">Tuned to the room.</h3>
                    <p data-animation="paragraph">
                        With room sensing, HomePod automatically understands its location in a room by using its mics to listen for sound reflections.
                        It tunes sound accordingly, so you’ll enjoy the best listening experience possible no matter where it’s placed.
                    </p>
                </div>
            </div>
            <div className="homeBlack_iph">
                <img src="/assets/handoff.webp" alt="" />
                <br />
                <div className="homeBlack_iph_txt lr child_wrap">
                    <h3>
                        <span data-animation="header">100+ million songs?</span> <br /> <span data-animation="header">Sounds amazing.</span>
                    </h3>
                    <p data-animation="paragraph">
                        HomePod is built to bring out the best in Apple Music.2 Listen to all of your favorite artists and songs — spanning every
                        imaginable genre — in the highest quality, right in your own home. With effortless access to one of the world’s largest music
                        libraries, the music never really has to stop.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="homeBlack_pods">
                <div className="img">
                    <img src="/assets/twin_pod.webp" alt="" />
                </div>
                <div className="homeBlack_iph_txt lr child_wrap">
                    <h3>
                        <span data-animation="paragraph">All your devices</span> <br /> <span data-animation="header">in concert.</span>
                    </h3>
                    <p data-animation="paragraph">
                        HomePod works seamlessly with your Apple devices. Handoff lets you transfer what’s playing on iPhone to HomePod — and the
                        other way around — without skipping a beat.6 And with just your voice, use Siri to easily locate a loved one or your misplaced
                        iPhone with Find My.7
                    </p>
                </div>
            </div>
        </div>
    );
}
