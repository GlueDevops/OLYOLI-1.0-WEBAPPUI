import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import LogoText from "../Widgets/LogoText";
const Login = () => {
  return (
    <main className='secondary-spacing'>
      <BackArrow />
      <LogoText />
      <form className='login-inputs'>
        <input
          type='email'
          className='input-field mb-2'
          placeholder='Email Address'
        />
        <input type='password' className='input-field mb-3' placeholder='Password' />
        <button className='main-btn'>Login</button>
        <div className='forgot-password-btn-container'>
          <Link to='/forgot-password' className='forgot-password-btn'>
            Forgot Password?
          </Link>
        </div>
        <p className='registration-text'>Don't have an account?</p>
        <button className='secondary-btn text-center'>
          <Link to='/registration'>Register now</Link>
        </button>
      </form>
    </main>
  );
};

export default Login;
