import React, { useRef } from "react";
import MyProfileLiveCard from "./MyProfileLiveCard";
const MyProfileLiveCluster = () => {
  let scrll = useRef();
  const slide = (s) => {
    scrll.current.scrollLeft += s;
  };

  return (
    <section className='profile-cluster-container'>
      <h3 className='profile-cluster-header'>Legal</h3>
      <p className='profile-cluster-text'>
        Business Registration, Copyright, Trade Mark ..
      </p>
      <button className='profile-cards-back-arrow' onClick={() => slide(-200)}>
        <span className='material-symbols-outlined'>arrow_back_ios</span>
      </button>
      <div className='profile-cards-container' ref={scrll}>
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
        <MyProfileLiveCard />
      </div>
      <button className='profile-cards-next-arrow' onClick={() => slide(+200)}>
        <span className='material-symbols-outlined'>arrow_forward_ios</span>
      </button>
    </section>
  );
};

export default MyProfileLiveCluster;
