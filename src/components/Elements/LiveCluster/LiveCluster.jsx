import React from "react";
import LiveCard from "./LiveCard";

const LiveCluster = () => {
  return (
    <section>
      <h3 className='cluster-header'>Legal</h3>
      <p className='cluster-text'>Business Registration, Copyright, Trade Mark ..</p>
      <div className='cards-container'>
        <LiveCard />
        <LiveCard />
        <LiveCard />
      </div>
    </section>
  );
};

export default LiveCluster;
