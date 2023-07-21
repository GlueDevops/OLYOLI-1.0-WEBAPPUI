import React from "react";
import UserProfileShortsCard from "./UserProfileShortsCard";
const UserProfileShortsCluster = () => {
  return (
    <section className="profile-cluster-container">
      <h3 className='profile-cluster-header'>Legal</h3>
      <p className='profile-cluster-text'>
        Business Registration, Copyright, Trade Mark ..
      </p>
      <div className='profile-cards-container'>
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
        <UserProfileShortsCard />
      </div>
    </section>
  );
};

export default UserProfileShortsCluster;
