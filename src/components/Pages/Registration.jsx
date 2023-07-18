import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import LogoText from "../Widgets/LogoText";

const Registration = () => {
  return (
    <main className='secondary-spacing'>
      <BackArrow />
      <LogoText />
      <form className='registration-inputs'>
        <div className='two-cols-input-container mb-2'>
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
        <input
          type='email'
          className='input-field mb-2'
          placeholder='Email Address'
        />
        <div className='two-cols-input-container mb-2'>
          <input
            type='text'
            className='two-cols-input-field'
            placeholder='Password'
          />
          <input
            type='text'
            className='two-cols-input-field'
            placeholder='Confirm Password'
          />
        </div>
        <select className='input-field mb-2'>
          <option value='' hidden>
            Choose your country
          </option>
        </select>
        <button className='main-btn'>Register</button>
        <p className='registration-terms'>
          By Register, you agree to our <Link>Terms</Link>,{" "}
          <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> . You may
          receive email notifications from us and can opt out at anytime.
        </p>
        <p className='login-text'>Already have an account?</p>
        <button className='secondary-btn text-center'>
          <Link to='/login'>Log into your account</Link>
        </button>
      </form>
    </main>
  );
};

export default Registration;
