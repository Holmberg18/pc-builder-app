import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./MainBanner.scss";
import * as data from "../../public/data/videos.json";

const MainBanner: FC = () => {

  const settings: Object = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const videos: {[key:string]:string}[] = data.videos;

  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to our Custom PC Building Estore</h1>
          <p>Shop our latest collections and find great deals on the products you love.</p>
          <button className="btn-shop-now">Shop Now</button>
        </div>
      </div>
      <div className="info-banner">
        <div className="info-banner-content">
          <div className="svg-section">
            <div className="svg-container">
              <img src="/images/gpu-mining.png" />
              <p>The latest and fastest GPUs on the market</p>
            </div>
            <div className="svg-container">
              <img src="/images/computer-case.png" />
              <p>We feature prebuilt builds or customize your own PC!</p>
            </div>
            <div className="svg-container">
              <img src="/images/support.png" />
              <p>Unparalleled customer support and warranty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-div">
        <Slider {...settings}>
          {videos.map(video => (
            <a href={video.href} key={video.src} className="video-link">
              <div className="video-slide">
                <video autoPlay muted loop>
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <p>{video.text}</p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>

  </div>
  );
};

export default MainBanner;

export const layout: {[key: string]: any} = {
  areaId: 'content',
  sortOrder: 1
};
