import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import MyProfileShortsCluster from "../Elements/ProfileShortsCluster/MyProfileShortsCluster";
import BottomNav from "../Elements/BottomNav";
import NavbarPrivate from "../Elements/Navbar/NavbarPrivate";

const MyProfile = () => {
  return (
    <main className='secondary-spacing-with-navbar'>
      <NavbarPrivate/>
      <BackArrow />
      <div className='my-profile-container'>
        {/* ------------ Top section of My profile -------------- */}
        <div className='my-profile-header'>
          <p className='my-profile-text'>My Profile</p>
          <Link to='/my-profile-settings' className='my-profile-settings-btn'>
            <span className='material-symbols-outlined'>settings</span>
          </Link>
        </div>
        <div className='my-profile-details'>
          <div className='my-profile-image'>
            <img src='' alt='' />
          </div>
          <div className='my-profile-details-text'>
            <p className='my-profile-name'>Flora Jasmine</p>
            <p className='my-profile-username'>@AwesomeVibe</p>
            <p className='my-profile-email'>florajasmine@gmail.com</p>
            <p className='my-profile-country'>France</p>
            <p className='my-profile-followers'>1.2K Followers</p>
          </div>
        </div>
        <div className='my-profile-about'>
          <h3 className='my-profile-about-header'>ABOUT</h3>
          <p className='my-profile-about-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s,
          </p>
        </div>
        {/* ------------ Bottom section of My profile -------------- */}
        <nav className='user-profile-nav'>
          <NavLink to='shorts'>Shorts</NavLink>
          <NavLink to='lives'>Lives</NavLink>
          <NavLink to='followers'>Followers</NavLink>
          <NavLink to='following'>Following</NavLink>
        </nav>
        <Outlet />
      </div>
      <BottomNav />
    </main>
  );
};

export default MyProfile;
