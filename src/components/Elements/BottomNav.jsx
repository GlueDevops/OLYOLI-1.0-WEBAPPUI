import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className='bottom-nav'>
      <div className='bottom-nav-container'>
        <Link to='/' className='bottom-nav-icon'>
          <span class='material-symbols-outlined'>home</span>
        </Link>
        <Link className='bottom-nav-icon'></Link>
        <Link to='/create-shorts-upload-video' className='bottom-nav-icon'>
          <span class='material-symbols-outlined'>add</span>
        </Link>
        <Link className='bottom-nav-icon'></Link>
        <Link className='bottom-nav-icon'></Link>
      </div>
    </nav>
  );
};

export default BottomNav;
