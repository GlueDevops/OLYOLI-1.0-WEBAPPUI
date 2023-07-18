import React from "react";

const LogoText = () => {
  return (
    <>
      <div className='logotext-icon'>
        <img
          src={require("../../assets/images/olyoli-icon.png")}
          alt='olyoli icon'
          className='h-100'
        />
      </div>
      <h1 className="logotext-text">
        OLYOLI
      </h1>
    </>
  );
};

export default LogoText;
