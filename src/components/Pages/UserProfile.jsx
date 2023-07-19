import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../Widgets/BackArrow";
import UserProfileShortsCluster from "../Elements/ProfileShortsCluster/UserProfileShortsCluster";
const UserProfile = () => {
  return (
    <main className='secondary-spacing'>
      <BackArrow />
      <div className='user-profile-container'>
        {/* ------------ Top section of User profile -------------- */}
        <div className='user-profile-header'>
          <p className='user-profile-name'>Flora Jasmine</p>
        </div>
        <div className='user-profile-details'>
          <div className='user-profile-image'>
            <img src='' alt='' />
          </div>
          <div className='user-profile-details-text'>
            <p className='user-profile-username'>@AwesomeVibe</p>
            <p className='user-profile-email'>florajasmine@gmail.com</p>
            <p className='user-profile-country'>France</p>
            <p className='user-profile-followers'>1.2K Followers</p>
          </div>
        </div>
        <div className='user-profile-about'>
          <h3 className='user-profile-about-header'>ABOUT</h3>
          <p className='user-profile-about-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s,
          </p>
        </div>
        {/* ------------ Bottom section of User profile -------------- */}
        <div className='user-profile-nav'>
          <Link>Shorts</Link>
          <Link>Live</Link>
          <Link>Followers</Link>
          <Link>Following</Link>
        </div>
        <UserProfileShortsCluster />
        <UserProfileShortsCluster />
      </div>
    </main>
  );
};

export default UserProfile;
