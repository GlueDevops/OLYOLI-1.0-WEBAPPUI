import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Elements/BottomNav";
import NavbarPrivate from "../Elements/Navbar/NavbarPrivate";
import BackArrow from "../Widgets/BackArrow";
const MyProfileSettings = () => {
  return (
    <main className='secondary-spacing-with-navbar relative'>
    <NavbarPrivate/>
      <BackArrow />
      <div className='settings-container'>
        <p className='settings-text'>My Profile Settings</p>
        <div className='settings-image-container'>
          <div className='settings-image'>
            <img src='' alt='' />
          </div>
        </div>
        {/* ----- Profile Section ----- */}
        <form className='settings-section'>
          <h3 className='settings-section-header'>Profile</h3>
          <div className='two-cols-input-container'>
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='First Name'
            />
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Last Name'
            />
          </div>
          <input type='text' className='input-field' placeholder='User Name' />
          <select className='input-field'>
            <option value='' hidden>
              Choose your country
            </option>
          </select>
          <textarea
            className='input-field input-bio'
            type='text'
            placeholder='Write about your self in 250 characters *'
          />
          <div className='save-changes-container'>
            <button className='save-changes-btn'>Save Changes</button>
          </div>
        </form>
        {/* ----- Login Credentials Section ----- */}
        <form className='settings-section'>
          <h3 className='settings-section-header'>Login Credentials</h3>
          <input
            type='email'
            className='input-field'
            placeholder='New Email Address'
          />
          <div className='save-changes-container'>
            <button className='save-changes-btn'>Save Changes</button>
          </div>
        </form>
        {/* ----- Password Section -----  */}
        <form className='settings-section mt-3'>
          <div className='two-cols-input-container'>
            <input
              type='password'
              className='two-cols-input-field'
              placeholder='New Password'
            />
            <input
              type='password'
              className='two-cols-input-field'
              placeholder='Confirm New Password'
            />
          </div>
          <div className='save-changes-container'>
            <button className='save-changes-btn'>Save Changes</button>
          </div>
        </form>
        {/* ----- Privacy Section -----  */}
        <form className='settings-section'>
          <h3 className='settings-section-header'>Privacy</h3>
          <div className='inactive-section'>
            <p className='inactive-text'>Inactive My Account</p>
            <button className='inactive-btn'>OFF</button>
          </div>
        </form>
      </div>
      <BottomNav />
    </main>
  );
};

export default MyProfileSettings;
