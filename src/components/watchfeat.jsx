import "./watchfeat.scss";

export default function watchfeat() {
    return (
        <div className="rept">
            <div className="rept_video">
                <video
                    playsInline
                    loop
                    autoPlay
                    muted
                    src="/assets/feat.mp4"
                ></video>
            </div>
        </div>
    );
}
