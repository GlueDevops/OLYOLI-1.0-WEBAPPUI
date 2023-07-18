import React from "react";
import ShortsViewVideo from "../ShortsView/ShortsViewVideo";

const ShortsView = () => {
  return (
    <div>
      <div className="shorts-view-nav">
        <button className="nav-btn">
          {" "}
          <img
            src={require("../../assets/images/back.png")}
            alt=''
            className='arrow-back'
          />
          Back{" "}
        </button>
        <button className="nav-btn">
          Next{" "}
          <img
            src={require("../../assets/images/next.png")}
            alt=''
            className='arrow-next'
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
