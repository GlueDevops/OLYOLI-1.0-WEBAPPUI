import React from "react";
import NavbarPublic from "../Elements/Navbar/NavbarPublic";
import ShortsCluster from "../Elements/ShortsCluster/ShortsCluster";
import Footer from "../Footer";
import Searchbar from "../Widgets/Searchbar";
const Shorts = () => {
  return (
    <div className='layout-spacing'>
      <NavbarPublic />
      <Searchbar />
      <ShortsCluster />
      <ShortsCluster />
      <ShortsCluster />
      <Footer />
    </div>
  );
};

export default Shorts;
