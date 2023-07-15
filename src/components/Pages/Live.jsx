import React from "react";
import LiveCluster from "../Elements/LiveCluster/LiveCluster";
import Navbar from "../Elements/Navbar/NavbarPublic";
import Footer from "../Footer";
import Searchbar from "../Widgets/Searchbar";

const Live = () => {
  return (
    <div className="layout-spacing">
      <Navbar />
      <Searchbar />
      <LiveCluster />
      <LiveCluster />
      <LiveCluster />
      <Footer />
    </div>
  );
};

export default Live;
