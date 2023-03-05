import "./ipad_ar.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function ipad_ar() {
    useEffect(() => {
        gsap.set(".ipad_ar_wrap_img img", {
            yPercent: 70,
        });
        gsap.to(".ipad_ar_wrap_img img", {
            yPercent: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".ipad_ar_wrap",
                start: "top center",
                end: "+=700",
                ease: "ease-in-out",
                scrub: true,
            },
        });
    });
    return (
        <div className="ipad_ar">
            <div className="ipad_ar_wrap mg_au">
                <div className="ipad_ar_wrap_txt">
                    <img width={35} src="https://www.apple.com/v/ipad-air/s/images/overview/ar/ar_icon__fsn1ulwwrhua_large_2x.png" alt="" />
                    <h2 data-animation="header">Use AR to see Homepod.</h2>
                    <p data-animation="paragraph">Open this page using Safari on your iPhone or iPad.</p>
                </div>
                <div className="ipad_ar_wrap_img">
                    <img
                        className="abs"
                        src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/ar_iphone__cwld5i9pfzki_large_2x.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default ipad_ar;
