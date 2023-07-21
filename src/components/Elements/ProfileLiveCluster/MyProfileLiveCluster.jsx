import React from "react";
import MyProfileLiveCard from './MyProfileLiveCard'
const MyProfileLiveCluster = () => {
  return (
    <section className="profile-cluster-container">
      <h3 className='profile-cluster-header'>Legal</h3>
      <p className='profile-cluster-text'>Business Registration, Copyright, Trade Mark ..</p>
      <div className='profile-cards-container'>
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
    </section>
  );
};

export default MyProfileLiveCluster;
