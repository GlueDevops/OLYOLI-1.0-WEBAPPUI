import React, { useState } from "react";
import Faqs from "../../Elements/Faqs";
const ShortsViewVideo = () => {
  const [toggleFaqs, setToggleFaqs] = useState(true);
  return (
    <div className='shorts-view-video-container'>
      <div className='shorts-view-video'>
        {toggleFaqs ? <Faqs setToggleFaqs={setToggleFaqs} /> : null}
        <div className='shorts-view-top'>
          <div className='shorts-view-img'>
            <img src='' alt='' />
          </div>
          <button
            className='shorts-view-interact'
            onClick={() => setToggleFaqs(true)}
          />
        </div>
        <div className='shorts-view-video-icon'>
          <img
            src={require("../../../assets/images/video-button.png")}
            alt=''
            className='w-100'
          />
        </div>
        <div className='shorts-view-bottom'>
          <button className='shorts-view-follow'>Follow</button>
          <p className='shorts-view-category'>Electronics</p>
          <p className='shorts-view-description'>
            Popular belief, Lorem is simply random text.
          </p>
          <p className='shorts-view-user'>Gluetron eBusiness, India.</p>
        </div>
      </div>
    </div>
  );
};

export default ShortsViewVideo;
