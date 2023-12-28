import { useEffect } from "react";
import "./homepod.scss";
import { drawImage } from "../../animations/drawImage";

function homepod() {
    useEffect(() => {
        const canvas = document.getElementById("seriesD");
        const currentFrame = (index) => {
            return `/assets/pro/pro_${index.toString().padStart(4, "0")}.webp`;
        };
     
        drawImage(canvas, currentFrame, 77)
    });
    return (
        <div className="homePod">
            <div className="homePod_wrap">
            <canvas width={window.innerWidth} height={window.innerHeight} data-pin-scroll className="heroWrap_canvas" id="seriesD"></canvas>
            <div className="homePod_txt">
                <h1 data-animation="fadeInOut">Profound sound</h1>
            </div>
            </div>
        </div>
    );
}

export default homepod;
