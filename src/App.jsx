import Hero from "./components/Hero/hero";
import Header from "./components/Header/header";
import Homepod from "./components/Homepod/homepod";
import Watchstudio from "./components/watch/watchstudio";
import HomeAr from "./components/Homepod/ipad_ar";
import HomeBlack from "./components/homeBlack/homeBlack";
import Watches from "./components/watchfeat";
import { split } from "./animations/text";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        split();
    });
    return (
        <div className="watch_wrap">
            <Header />
            <Hero />
            <Watches />
            <Watchstudio />
            <HomeBlack />
            <HomeAr />
            <Homepod />
        </div>
    );
}

export default App;
