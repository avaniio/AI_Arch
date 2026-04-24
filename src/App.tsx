import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import GridBackground from './components/canvas/GridBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Profile from './components/sections/Profile';
import Generate from './components/Generate';
import { config } from './constants/config';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Global layers */}
      <CustomCursor />
      <GridBackground />

      {/* Shared navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
