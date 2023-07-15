import React from "react";
import Navbar from "../Elements/Navbar/NavbarPublic";
import ShortsCluster from "../Elements/ShortsCluster/ShortsCluster";
import Footer from "../Footer";
import Searchbar from "../Widgets/Searchbar";
const Shorts = () => {
  return (
    <div className='layout-spacing'>
      <Navbar />
      <Searchbar />
      <ShortsCluster />
      <ShortsCluster />
      <ShortsCluster />
      <Footer />
    </div>
  );
};

export default Shorts;
