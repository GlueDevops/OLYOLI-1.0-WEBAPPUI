import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <Link>About OLYOLI</Link>
        <Link>Support</Link>
        <Link>Terms of Use</Link>
        <Link>Privacy Policy</Link>
        <Link>GDPR</Link>
        <Link>Cookies</Link>
      </div>
    </footer>
  );
};

export default Footer;
