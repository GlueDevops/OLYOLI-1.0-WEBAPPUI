import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Elements/BottomNav";
import NavbarPrivate from "../Elements/Navbar/NavbarPrivate";
import BackArrow from "../Widgets/BackArrow";

const CreateShorts = () => {
  return (
    <main className='secondary-spacing-with-navbar'>
    <NavbarPrivate/>
      <BackArrow />
      <div className='create-shorts-container'>
        <h2 className='create-shorts-heading'>Account Profile</h2>
        <p className='create-shorts-paragraph'>
          Please complete your profile in order to create short videos
        </p>
        <div className='upload-btn-container'>
          <button className='upload-btn'>
            <span className='material-symbols-outlined upload-icon'>add</span>
            <input
              type='file'
              accept='image/*'
              // onChange={uploadHandler}
              id='file'
              required
            />
          </button>
        </div>
        <p className='upload-image-text'>Upload profile picture</p>
        <p className='upload-image-info'>250 x 250 Pixels. Maximum File Size 2MB</p>
        <div className='input-fields'>
          <input className='input-field mb-2' type='text' placeholder='Username *' />
          <textarea
            className='input-field input-bio'
            type='text'
            placeholder='Write about your self in 250 characters *'
          />
        </div>
        <p className='create-shorts-terms'>
          By Create Shorts profile, you agree to our{" "}
          <Link>Terms and Privacy Policy</Link>. You may receive email notifications
          from us to verify your profile and can opt out at anytime.
        </p>
        <button className='main-btn'>Create</button>
      </div>
      <BottomNav />
    </main>
  );
};

export default CreateShorts;
