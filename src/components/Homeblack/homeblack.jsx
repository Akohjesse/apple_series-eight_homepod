import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import "./index.scss";
export default function Homeblack() {
    useEffect(() => {
        gsap.set(".homeBlack_iph img", {
            yPercent: 70,
            autoAlpha: 0,
        });
        gsap.to(".homeBlack_iph img", {
            yPercent: 0,
            duration: 2,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".homeBlack_iph",
                start: "top center",
                end: "+=1000",
                ease: "ease-in-out",
                scrub: true,
            },
        });
        gsap.set(".homeBlack_pods .img", {
            yPercent: 50,
            autoAlpha: 0,
        });
        gsap.to(".homeBlack_pods .img", {
            yPercent: 0,
            autoAlpha: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".homeBlack_pods",
                start: "top center",
                end: "+=1000",
                ease: "ease-in-out",
                scrub: true,
            },
        });
    });
    return (
        <div className="homeBlack">
            <div className="homeBlack_video">
                <video
                    muted
                    loop
                    autoPlay
                    src="https://www.apple.com/105/media/us/homepod-2nd-generation/2023/f6c72fbe-43a7-45cd-b7b5-ce192011cca9/anim/spatial-awareness/large_2x.mp4#t=0.901897"
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
                <img src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/handoff__1iir0nzgjkia_large_2x.jpg" alt="" />
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
                    <img src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/homepod_twins__gi5qodweaqie_large_2x.jpg" alt="" />
                </div>
                <div className="homeBlack_iph_txt lr child_wrap">
                    <h3>
                        <span data-animation="header">All your devices</span> <br /> <span data-animation="header">in concert.</span>
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
