import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherDisplay from './Components/WeatherDisplay.jsx';
import Navigation from './Components/Navigation.jsx';
import AboutUs from './Components/AboutUs.jsx';
import HomePage from './pages/HomePage';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Weather" element={<WeatherDisplay />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;