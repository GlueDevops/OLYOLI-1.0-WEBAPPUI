import React from "react";
import MyProfileShortsCard from './MyProfileShortsCard'
const MyProfileShortsCluster = () => {
  return (
    <section className="profile-cluster-container">
      <h3 className='profile-cluster-header'>Legal</h3>
      <p className='profile-cluster-text'>Business Registration, Copyright, Trade Mark ..</p>
      <div className='profile-cards-container'>
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
        <MyProfileShortsCard />
      </div>
    </section>
  );
};

export default MyProfileShortsCluster;
