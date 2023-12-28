import { useEffect } from "react";
import { drawImage } from "../../animations/drawImage";
import "./hero.scss";

export default function hero() {
    useEffect(() => {
        const canvas = document.getElementById("seriesE");
        const currentFrame= (index) => `/assets/hero/hero_${index.toString().padStart(4, "0")}.webp`;
        drawImage(canvas, currentFrame, 120);
    }, []);

    return (
        <div className="heroWrap">
            <div className="heroWrap_sticky">
                <div className="heroWrap_sticky_container child_wrap">
                    <h3>iWatch Mashup </h3>
                    <nav>
                        <ul>
                            <li>Overview</li>
                            <li></li>
                            <button>Buy</button>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="heroWrap_wrap">
                <canvas width={window.innerWidth} height={window.innerHeight} className="heroWrap_canvas" id="seriesE"></canvas>
                <div className="heroWrap_txt">
                <img src="assets/logo_watch_series_8.webp" alt="" />
                <h1 data-animation="header">A healthy leap ahead.</h1>
                </div>
                <div className="heroWrap_animeText">
                <div className="heroWrap_animeText_cont">
                    <h1 data-animation="paragraph">
                        <span>
                            Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s
                            health.1 Crash Detection to get help in an emergency. The future of health never looked so good.
                        </span>
                    </h1>
                    <div className="flex">
                        <p data-animation="header">Watch the event</p>
                        <p data-animation="header">Watch the film</p>
                    </div>
                </div>
            </div>
            </div>
           
        
        </div>
    );
}
