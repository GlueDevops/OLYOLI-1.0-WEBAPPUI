import React, { useState } from "react";
import BottomNav from "../Elements/BottomNav";
import Faqs from "../Elements/Faqs";

const LiveRoom = () => {
  const [toggleFaqs, setToggleFaqs] = useState(true);
  return (
    <div className='live-room-container'>
      <div className='live-room-video'>
        {toggleFaqs ? <Faqs setToggleFaqs={setToggleFaqs} /> : null}
        <div className='live-video-interact'>
          <div className='multiple-interact-btns'>
            <div className='live-video-interact-btn'></div>
            <div className='live-video-interact-btn'></div>
            <div className='live-video-interact-btn'></div>
            <div className='live-video-interact-btn'></div>
          </div>
          <b className='single-interact-btn'>
            <button
              className='live-video-faqs-btn'
              onClick={() => setToggleFaqs(true)}></button>
          </b>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default LiveRoom;
