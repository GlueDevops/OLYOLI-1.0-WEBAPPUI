import React from "react";
import ShortsViewVideo from "../ShortsView/ShortsViewVideo";

const ShortsView = () => {
  return (
    <div>
      <div className="shorts-view-nav">
        <button className="shorts-view-nav-btn">
          {" "}
          <img
            src={require("../../assets/images/back.png")}
            alt=''
            className='shorts-view-arrow-back'
          />
          Back{" "}
        </button>
        <button className="shorts-view-nav-btn">
          Next{" "}
          <img
            src={require("../../assets/images/next.png")}
            alt=''
            className='shorts-view-arrow-next'
          />
        </button>
      </div>
      <ShortsViewVideo />
      <div className="shorts-view-home-container">
      <button className="shorts-view-home-btn">HOME</button>
      </div>
    </div>
  );
};

export default ShortsView;
