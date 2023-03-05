import { useEffect } from "react";
import "./homepod.scss";

function homepod() {
    useEffect(() => {
        const html = document.documentElement;
        const canvas = document.getElementById("seriesD");
        const context = canvas.getContext("2d");
        const frameCount = 171;
        const currentFrame = (index) => {
            return `/src/assets/homepod/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
        };

        const img = new Image();
        img.src = currentFrame(1);
        img.onload = function () {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        const preloadImages = () => {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
            }
        };

        const wrap = document.querySelector(".homePod");
        const rect = wrap.getBoundingClientRect();
        window.addEventListener("scroll", () => {
            const scrollTop = html.scrollTop - wrap.offsetTop;
            const maxScrollTop = wrap.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
            if (frameIndex > 0) {
                requestAnimationFrame(() => updateImage(frameIndex + 1));
            }
        });

        const updateImage = (index) => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        preloadImages();
    });
    return (
        <div className="homePod">
            <canvas width={window.innerWidth} height={window.innerHeight} data-pin-scroll className="heroWrap_canvas" id="seriesD"></canvas>
            <div className="homePod_txt">
                <h1 data-animation="fadeInOut">Profound sound</h1>
            </div>
        </div>
    );
}

export default homepod;
