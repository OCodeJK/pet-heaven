import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PetsList from './pages/PetsList';
import Register from './pages/Register';
import ReleasePet from './pages/ReleasePet';
import AdoptPet from './pages/AdoptPet';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetsList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/release" element={<ReleasePet />} />
        <Route path="/adopt" element={<AdoptPet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
