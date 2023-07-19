import { Routes, Route } from 'react-router-dom'
import CreateShorts from './components/Pages/CreateShorts';
import CreateLive from './components/Pages/CreateLive';
import ForgotPassword from './components/Pages/ForgotPassword';
import Live from "./components/Pages/Live";
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import Shorts from "./components/Pages/Shorts";
import ShortsView from "./components/Pages/ShortsView";
import ShortsViewFaq from "./components/Pages/ShortsViewFaq";
import UserProfile from './components/Pages/UserProfile';
import MyProfile from './components/Pages/MyProfile';
import MyProfileSettings from './components/Pages/MyProfileSettings';
import LiveRoom from './components/Pages/LiveRoom';


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
          <Route path='/shorts-view-faq' element={<ShortsViewFaq />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/my-profile-settings' element={<MyProfileSettings />} />
          <Route path='/live-room' element={<LiveRoom />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
