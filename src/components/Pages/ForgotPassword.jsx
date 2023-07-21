import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import LogoText from "../Widgets/LogoText";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(0);
  return (
    <main className='secondary-spacing'>
      {step === 1 ? <BackArrow /> : <div className='arrow-placeholder' />}
      <LogoText />
      {/* ----- Input Email Step ----- */}
      {step === 1 ? (
        <div className='forgot-password-inputs'>
          <p className='forgot-password-text'>
            Please Enter your registered email address
          </p>
          <input
            type='email'
            className='input-field mb-2'
            placeholder='Email Address'
          />
          <button className='main-btn' onClick={() => setStep(2)}>
            Send OTP
          </button>
        </div>
      ) : null}
      {/* ----- Verify OTP Step ----- */}
      {step === 2 ? (
        <div className='forgot-password-inputs'>
          <p className='forgot-password-text'>Please Enter The OTP</p>
          <OTPInput
            inputStyle='otp-input'
            value={otp}
            onChange={setOtp}
            numInputs={7}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          />
          <button
            className='main-btn'
            disabled={otp.length < 7}
            onClick={() => setStep(3)}>
            Verify
          </button>
          <button className='secondary-btn otp-cancel'>Cancel</button>
        </div>
      ) : null}

      {/* ----- New Password Step ----- */}
      {step === 3 ? (
        <div className='forgot-password-inputs'>
          <p className='forgot-password-text'>Create New Password</p>
          <input
            type='password'
            className='input-field mb-2'
            placeholder='New Password'
          />
          <input
            type='password'
            className='input-field mb-2'
            placeholder='Confirm New Password'
          />
          <button className='main-btn' onClick={() => setStep(4)}>
            Create
          </button>
          <button className='secondary-btn new-password-cancel'>Cancel</button>
        </div>
      ) : null}
      {/* ----- Password change Success ----- */}
      {step === 4 ? (
        <div className='forgot-password-inputs'>
          <p className='forgot-password-success'>
            You have been created new password{" "}
            <span className='d-block fw-bold'>Successfully</span>
          </p>
          <button className='secondary-btn forgot-password-login'>
            <Link to='/login' className='d-block'>
              Please login into your account
            </Link>
          </button>
        </div>
      ) : null}
    </main>
  );
};

export default ForgotPassword;
