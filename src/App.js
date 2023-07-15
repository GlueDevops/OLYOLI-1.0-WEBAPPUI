import { Routes, Route } from 'react-router-dom'


import Navbar from "./components/Elements/Navbar/Navbar";
import Footer from './components/Footer';
import Live from "./components/Pages/Live";
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
          <Route path='/shorts' element={<Shorts />} />
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
