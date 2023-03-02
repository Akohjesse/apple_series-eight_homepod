import { useEffect } from "react";
import "./hero.scss";

export default function hero() {
    useEffect(() => {
        const html = document.documentElement;
        const canvas = document.getElementById("seriesE");
        const context = canvas.getContext("2d");
        const frameCount = 478;
        const currentFrame = (index) => {
            return `/src/assets/pic/Screen Recording 2023-03-02 at 13.53.22-1_${index.toString().padStart(5, "0")}.png`;
        };

        const img = new Image();
        img.src = currentFrame(1);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        img.onload = function () {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const preloadImages = () => {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
            }
        };

        const updateImage = (index) => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const wrap = document.querySelector(".heroWrap");

        window.addEventListener("scroll", () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = wrap.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            console.log(scrollFraction);
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
            requestAnimationFrame(() => updateImage(frameIndex + 1));
        });

        preloadImages();
    }, []);

    return (
        <>
            <div className="heroWrap">
                <canvas data-pin-scroll className="heroWrap_canvas" id="seriesE"></canvas>
            </div>
            <div className="e"></div>
        </>
    );
}
