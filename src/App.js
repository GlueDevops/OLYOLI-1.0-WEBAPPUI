import { Routes, Route, Navigate } from 'react-router-dom'
import CreateShorts from './components/Pages/CreateShorts';
import CreateLive from './components/Pages/CreateLive';
import ForgotPassword from './components/Pages/ForgotPassword';
import Live from "./components/Pages/Live";
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import Shorts from "./components/Pages/Shorts";
import ShortsView from "./components/Pages/ShortsView/ShortsView";
import UserProfile from './components/Pages/UserProfile';
import MyProfile from './components/Pages/MyProfile';
import MyProfileSettings from './components/Pages/MyProfileSettings';
import LiveRoom from './components/Pages/LiveRoom';
import Notifications from './components/Pages/Notifications';
import Welcome from './components/Pages/Welcome';
import NotificationsGeneral from './components/SubPages/NotificationsGeneral';
import NotificationsFaqs from './components/SubPages/NotificationsFaqs';
import NotificationsFollows from './components/SubPages/NotificationsFollows';
import NotificationsLikes from './components/SubPages/NotificationsLikes';
import ProfileFollowers from './components/SubPages/ProfileFollowers';
import ProfileFollowing from './components/SubPages/ProfileFollowing';
import UserProfileShorts from './components/SubPages/UserProfileShorts';
import MyProfileShorts from './components/SubPages/MyProfileShorts';
import ProfileLives from './components/SubPages/ProfileLives';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="overall-container">
        <Routes>
          <Route path='/' element={<Shorts />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/create-shorts' element={<CreateShorts />} />
          <Route path='/create-live' element={<CreateLive />} />
          <Route path='/live' element={<Live />} />
          <Route path='/shorts-view' element={<ShortsView />} />
          <Route path='/user-profile' element={<UserProfile />} >
            <Route path='followers' element={<ProfileFollowers />} />
            <Route path='following' element={<ProfileFollowing />} />
            <Route path='shorts' element={<UserProfileShorts />} />
            <Route path='lives' element={<ProfileLives />} />
            <Route path="/user-profile" element={<Navigate to="shorts" replace />} />
          </Route>
          <Route path='/my-profile' element={<MyProfile />} >
            <Route path='shorts' element={<MyProfileShorts />} />
            <Route path='lives' element={<ProfileLives />} />
            <Route path='followers' element={<ProfileFollowers />} />
            <Route path='following' element={<ProfileFollowing />} />
            <Route path="/my-profile" element={<Navigate to="shorts" replace />} />
          </Route>
          <Route path='/my-profile-settings' element={<MyProfileSettings />} />
          <Route path='/live-room' element={<LiveRoom />} />
          <Route path='/notifications' element={<Notifications />} >
            <Route path='general' element={<NotificationsGeneral />} />
            <Route path='faqs' element={<NotificationsFaqs />} />
            <Route path='follows' element={<NotificationsFollows />} />
            <Route path='likes' element={<NotificationsLikes />} />
            <Route path="/notifications" element={<Navigate to="faqs" replace />} />
          </Route>
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
