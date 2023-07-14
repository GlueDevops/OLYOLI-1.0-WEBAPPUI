import React from "react";
import ShortsCard from "./ShortsCard";

const ShortsCluster = () => {
  return (
    <section>
      <h3 className='cluster-header'>Legal</h3>
      <p className='cluster-text'>Business Registration, Copyright, Trade Mark ..</p>
      <div className="cards-container">
        <ShortsCard />
        <ShortsCard />
        <ShortsCard />
      </div>
    </section>
  );
};

export default ShortsCluster;
