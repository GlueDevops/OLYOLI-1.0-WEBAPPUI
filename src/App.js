import { Routes, Route } from 'react-router-dom'
import CreateShorts from './components/Pages/CreateShorts';
import ForgotPassword from './components/Pages/ForgotPassword';
import Live from "./components/Pages/Live";
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import Shorts from "./components/Pages/Shorts";
import ShortsView from "./components/Pages/ShortsView";
import ShortsViewFaq from "./components/Pages/ShortsViewFaq";


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
          <Route path='/live' element={<Live />} />
          <Route path='/shorts-view' element={<ShortsView />} />
          <Route path='/shorts-view-faq' element={<ShortsViewFaq />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
