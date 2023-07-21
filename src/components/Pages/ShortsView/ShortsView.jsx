import React from "react";
import ShortsViewVideo from "./ShortsViewVideo";
import BackArrow from "../../Widgets/BackArrow";
import NextArrow from "../../Widgets/NextArrow";
const ShortsView = () => {
  return (
    <div className='shorts-view-container'>
      <ShortsViewVideo />
      <div className='shorts-view-nav'>
        <div className='d-flex flex-column justify-content-center'>
          <BackArrow />
        </div>
        <button className='shorts-view-home-btn'>HOME</button>
        <div className='d-flex flex-column justify-content-center'>
          <NextArrow />
        </div>
      </div>
    </div>
  );
};

export default ShortsView;
