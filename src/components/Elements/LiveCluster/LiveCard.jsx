import React from "react";

const LiveCard = () => {
  return (
    <div className='live-card'>
      <div className='live-card-top'>
        <div className='live-card-img'>
          <img src='' alt='' />
        </div>
        <button className='live-card-join'>Join now</button>
      </div>
      <div className='live-card-bottom'>
        <p className='live-card-category'>Electronics</p>
        <p className='live-card-date'>Starts on: 5th August 2023 @ 4:00PM IST</p>
        <p className='live-card-description'>
          Popular belief, Lorem is simply random text.
        </p>
        <p className='live-card-user'>Gluetron eBusiness, India.</p>
      </div>
    </div>
  );
};

export default LiveCard;
