import { Routes, Route } from 'react-router-dom'


import Navbar from "./components/Elements/Navbar/Navbar";
import Live from "./components/Pages/Live";
import Shorts from "./components/Pages/Shorts";


function App() {
  return (
    <>
      <Navbar />
      <div className="overall-container">
        <Routes>
          <Route path='/' element={<Shorts />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/live' element={<Live />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
