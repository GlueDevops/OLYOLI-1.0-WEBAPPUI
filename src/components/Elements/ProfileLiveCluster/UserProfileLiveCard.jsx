import React from "react";

const UserProfileLiveCard = () => {
  return (
    <div className='profile-live-card'>
      <div className='profile-live-card-top'>
        <div className='profile-live-card-img'>
          <img src='' alt='' />
        </div>
        <button className='profile-live-card-join'>Join now</button>
      </div>
      <div className='profile-live-card-bottom'>
        <p className='profile-live-card-category'>Electronics</p>
        <p className='profile-live-card-date'>
          Starts on: 5th August 2023 @ 4:00PM IST
        </p>
        <p className='profile-live-card-description'>
          Popular belief, Lorem is simply text.
        </p>
        <p className='profile-live-card-user'>Gluetron eBusiness, India.</p>
      </div>
    </div>
  );
};

export default UserProfileLiveCard;
