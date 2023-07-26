import React from "react";

const Notification = () => {
  return (
    <div className='notification-container'>
      <div className='notification-left'></div>
      <div className='notification-right'>
        <button className='notification-options'>
          <p className='notification-date'>1 minute</p>
          <span className='material-symbols-outlined'>more_vert</span>
        </button>
      </div>
    </div>
  );
};

export default Notification;
