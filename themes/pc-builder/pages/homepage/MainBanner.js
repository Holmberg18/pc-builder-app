import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./MainBanner.scss";
import * as data from "../../public/data/videos.json";
const MainBanner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const videos = data.videos;
    return (React.createElement("div", null,
        React.createElement("div", { className: "banner" },
            React.createElement("div", { className: "banner-content" },
                React.createElement("h1", null, "Welcome to our Custom PC Building Estore"),
                React.createElement("p", null, "Shop our latest collections and find great deals on the products you love."),
                React.createElement("button", { className: "btn-shop-now" }, "Shop Now"))),
        React.createElement("div", { className: "info-banner" },
            React.createElement("div", { className: "info-banner-content" },
                React.createElement("div", { className: "svg-section" },
                    React.createElement("div", { className: "svg-container" },
                        React.createElement("img", { src: "/images/gpu-mining.png" }),
                        React.createElement("p", null, "The latest and fastest GPUs on the market")),
                    React.createElement("div", { className: "svg-container" },
                        React.createElement("img", { src: "/images/computer-case.png" }),
                        React.createElement("p", null, "We feature prebuilt builds or customize your own PC!")),
                    React.createElement("div", { className: "svg-container" },
                        React.createElement("img", { src: "/images/support.png" }),
                        React.createElement("p", null, "Unparalleled customer support and warranty"))))),
        React.createElement("div", { className: "slider-div" },
            React.createElement(Slider, Object.assign({}, settings), videos.map(video => (React.createElement("a", { href: video.href, key: video.src, className: "video-link" },
                React.createElement("div", { className: "video-slide" },
                    React.createElement("video", { autoPlay: true, muted: true, loop: true },
                        React.createElement("source", { src: video.src, type: "video/mp4" })),
                    React.createElement("div", { className: "video-overlay" },
                        React.createElement("p", null, video.text))))))))));
};
export default MainBanner;
export const layout = {
    areaId: 'content',
    sortOrder: 1
};
