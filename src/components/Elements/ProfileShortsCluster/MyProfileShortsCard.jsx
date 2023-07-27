import React from "react";

const MyProfileShortsCard = () => {
  return (
    <div className='profile-shorts-card'>
      <div className='profile-shorts-card-top'>
        <div className='profile-shorts-card-img'>
          <img src='' alt='' />
        </div>
        <div className='profile-shorts-card-interact'>
          <span className='material-symbols-outlined'>favorite</span>
          <p>3K</p>
          <span className='material-symbols-outlined'>chat</span>
          <p>3K</p>
        </div>
      </div>
      <div className='profile-shorts-card-video'>
        <img
          src={require("../../../assets/images/video-button.png")}
          alt=''
          className='w-100'
        />
      </div>
      <div className='profile-shorts-card-bottom'>
        <p className='profile-shorts-card-category'>Electronics</p>
        <p className='profile-shorts-card-description'>
          Popular belief, Lorem is simply text.
        </p>
        <p className='profile-shorts-card-user'>Gluetron eBusiness, India.</p>
        <button className='profile-shorts-edit-btn'>Edit</button>
      </div>
    </div>
  );
};

export default MyProfileShortsCard;
