import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/home.js';
import Educational from './pages/Educational/educational.js';
import Navigation from './pages/Navbar/navbar.js';
import Skill from './pages/Skill/skill.js';
import Portofolio from './pages/Portofolio/portofolio';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portofolio" element={<Portofolio/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
