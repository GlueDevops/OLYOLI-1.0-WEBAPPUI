import React from "react";

const TextContentBanner = ({ head, text }) => {
  return (
    <section className='text-center pt-5'>
      <h1 className='banner-head serif-font'>{head}</h1>
      <p className="banner-text">{text}</p>
    </section>
  );
};

export default TextContentBanner;
