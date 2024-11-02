import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [name, setName] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("users")) || {};
    if (loggedInUser) {
      setName(userInfo[0].username);
    } else {
      setName("Guest");
    }
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <br></br>
      <h1>Welcome to Pet Heaven, {name}</h1>
      <p>We help abandoned pets find a new home.</p>
    </div>
  )
}

export default Home