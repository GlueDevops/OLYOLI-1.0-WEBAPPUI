import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Elements/BottomNav";
import NavbarPrivate from "../Elements/Navbar/NavbarPrivate";
import BackArrow from "../Widgets/BackArrow";

const CreateLive = () => {
  return (
    <main className='secondary-spacing-with-navbar'>
      <NavbarPrivate />
      <BackArrow />
      <div className='create-live-container'>
        <h2 className='create-live-heading'>Create Live</h2>
        <p className='create-live-paragraph'>
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <form className='create-live-form'>
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
          <p className='upload-image-text'>Upload cover picture</p>
          <p className='upload-image-info'>
            250 x 250 Pixels. Maximum File Size 2MB
          </p>
          <input className='input-field' type='text' placeholder='Title *' />
          <select className='input-field'>
            <option value='' hidden>
              Choose Topic
            </option>
          </select>
          <select className='input-field'>
            <option value='' hidden>
              Choose Language
            </option>
          </select>
          <div className='two-cols-input-container'>
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Location *'
            />
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Date *'
            />
          </div>
          <div className='two-cols-input-container'>
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='Start Time *'
            />
            <input
              type='text'
              className='two-cols-input-field'
              placeholder='End Time *'
            />
          </div>
          <textarea
            className='input-field input-bio'
            type='text'
            placeholder='Write about this session in 250 characters *'
          />
          <textarea
            className='input-field input-bio'
            type='text'
            placeholder='Note for participants in 250 characters *'
          />
        </form>
        <p className='create-live-terms'>
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

export default CreateLive;
