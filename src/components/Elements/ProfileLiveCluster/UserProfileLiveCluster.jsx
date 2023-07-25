import React from "react";
import UserProfileLiveCard from "./UserProfileLiveCard";
const UserProfileLiveCluster = () => {
  return (
    <section className="profile-cluster-container">
      <h3 className='profile-cluster-header'>Legal</h3>
      <p className='profile-cluster-text'>
        Business Registration, Copyright, Trade Mark ..
      </p>
      <div className='profile-cards-container'>
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
        <UserProfileLiveCard />
      </div>
    </section>
  );
};

export default UserProfileLiveCluster;
