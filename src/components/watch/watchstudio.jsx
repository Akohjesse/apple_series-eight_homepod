import "./watchstudio.scss";
import watch from "/assets/cto-case.webp";
import { IO } from "../../animations/observe";
import { useEffect } from "react";

export default function watchstudio() {
    useEffect(() => {
        const iti = document.querySelector(".watchStudio_img");
        IO(iti).then(
            () => {
                setTimeout(() => {
                    document.querySelector(".watchStudio").classList.add("animate_bands");
                }, 500);
            },
            { threshold: 1 }
        );
    });
    return (
        <>
            <div className="water6">
                <div className="water6_txt">
                    <p data-animation="header">Fitness</p>
                    <h1 data-animation="header">So much to move you.</h1>
                </div>
            </div>
            <div className="watchStudio">
                <div className="watchStudio_txt">
                    <p data-animation="header">Apple Watch Studio</p>
                    <h2>
                        <span data-animation="header">Any case. Any band.</span>
                        <br />
                        <span data-animation="header">Any style you want.</span>
                    </h2>
                    <button>Create your style</button>
                </div>
                <div className="watchStudio_img">
                    <img src={watch} alt="" />
                </div>
            </div>
        </>
    );
}
