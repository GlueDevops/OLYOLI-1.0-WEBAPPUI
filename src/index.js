import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { BrowserRouter } from 'react-router-dom'
// import { ContextProvider } from './context';

// Including CSS Files
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './css/navbar.css';
import './css/textContentBanner.css';
import './css/shortsLiveCluster.css';
import './css/shortsCard.css';
import './css/liveCard.css';
import './css/searchbar.css';
import './css/footer.css';
import './css/shortsView.css';
import './css/shortsViewVideo.css';
import './css/login.css';
import './css/registration.css';
import './css/logoText.css';
import './css/forgotPassword.css';
import './css/createShorts.css';
import './css/createLive.css';
import './css/userProfile.css';
import './css/myProfile.css';
import './css/profileShortsCard.css';
import './css/profileLiveCard.css';
import './css/profileLiveCluster.css';
import './css/myProfileSettings.css';
import './css/liveRoom.css';
import './css/notifications.css';
import './css/notification.css';
import './css/faqs.css';
import './css/welcome.css';
import './css/follower.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ContextProvider> */}
  </React.StrictMode>
);
