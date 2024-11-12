import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import ReleasePet from './pages/ReleasePet';
import Footer from './components/Footer';
import Login from './pages/Login';
import PetDetail from './pages/PetDetail';
import CatList from './pages/CatList';
import DogList from './pages/DogList';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/dogs" element={<DogList />}/>
        <Route path="/detail" element={<PetDetail />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/release" element={<ReleasePet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
