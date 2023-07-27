import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarPrivate = () => {
  const { pathname } = useLocation();
  return (
    <nav className='top-nav'>
      <div className='navbar-container d-flex align-items-center justify-content-between'>
        {/* ----- Logo and left buttons containers ----- */}
        <div className='d-flex align-items-center gap-3'>
          {/* ----- Logo ----- */}
          <div className='d-flex align-items-center'>
            <div className='navbar-icon'>
              <img
                src={require("../../../assets/images/olyoli-icon.png")}
                alt='olyoli icon'
                className='h-100'
              />
            </div>
            <span className='navbar-icon-text'>OLYOLI</span>
          </div>
          {/* ----- Live & Shorts Toggle buttons ----- */}
          <div className='d-flex gap-2'>
            <NavLink to='/live' className='navbar-btn'>
              {pathname === "/live" ? (
                <span className='material-symbols-rounded navbar-btn-icon'>
                  circle
                </span>
              ) : (
                <span className='material-symbols-outlined navbar-btn-icon'>
                  circle
                </span>
              )}
              Live
            </NavLink>
            <NavLink to='/' className='navbar-btn'>
              <span className='material-symbols-outlined navbar-btn-icon'>
                play_circle
              </span>
              Shorts
            </NavLink>
          </div>
        </div>
        <div className=''>
          <Link to='/my-profile' className='my-profile-settings-btn'>
            <div className="navbar-profile-icon"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrivate;
