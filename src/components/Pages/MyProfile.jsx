import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import MyProfileShortsCluster from "../Elements/ProfileShortsCluster/MyProfileShortsCluster";

const MyProfile = () => {
  return (
    <main className='secondary-spacing'>
      <BackArrow />
      <div className='my-profile-container'>
        {/* ------------ Top section of My profile -------------- */}
        <div className='my-profile-header'>
          <p className='my-profile-text'>My Profile</p>
          <div className='my-profile-settings-btn'></div>
        </div>
        <div className='my-profile-details'>
          <div className='my-profile-image'>
            <img src='' alt='' />
          </div>
          <div className='my-profile-details-text'>
            <p className='my-profile-name'>Flora Jasmine</p>
            <p className='my-profile-username'>@AwesomeVibe</p>
            <p className='my-profile-email'>florajasmine@gmail.com</p>
            <p className='my-profile-country'>France</p>
            <p className='my-profile-followers'>1.2K Followers</p>
          </div>
        </div>
        <div className='my-profile-about'>
          <h3 className='my-profile-about-header'>ABOUT</h3>
          <p className='my-profile-about-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s,
          </p>
        </div>
        {/* ------------ Bottom section of My profile -------------- */}
        <div className='my-profile-nav'>
          <Link>Shorts</Link>
          <Link>Live</Link>
          <Link>Followers</Link>
          <Link>Following</Link>
        </div>
        <MyProfileShortsCluster />
        <MyProfileShortsCluster />
      </div>
    </main>
  );
};

export default MyProfile;
