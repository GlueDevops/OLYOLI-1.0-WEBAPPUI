import React from "react";

const ShortsCard = () => {
  return (
    <div className='shorts-card'>
      <div className='shorts-card-top'>
        <div className='shorts-card-img'>
          <img src='' alt='' />
        </div>
        <div className='shorts-card-interact'></div>
      </div>
      <div className='shorts-card-video'>
        <img
          src={require("../../../assets/images/video-button.png")}
          alt=''
          className='w-100'
        />
      </div>

      <div className='shorts-card-bottom'>
        <p className='shorts-card-category'>Electronics</p>
        <p className='shorts-card-date'>Starts on: 5th August 2023 @ 4:00PM IST</p>
        <p className='shorts-card-description'>
          Popular belief, Lorem is simply random text.
        </p>
        <p className='shorts-card-user'>Gluetron eBusiness, India.</p>
      </div>
    </div>
  );
};

export default ShortsCard;
