import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Products from './pages/Products';
// import Services from './pages/Services';
// import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogOut} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
