import React from "react";

const Follower = () => {
  return (
    <div className='follower-container'>
      <div className='follower-left'></div>
      <div className='follower-right'>
        <button className='follower-options'>
          <span className='material-symbols-outlined'>more_vert</span>
        </button>
      </div>
    </div>
  );
};

export default Follower;
