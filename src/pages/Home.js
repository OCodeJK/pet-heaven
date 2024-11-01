import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [name, setName] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("users")) || {};
    setName(userInfo[0].username || "Guest");
  }, []);


  return (
    <div>
      <br></br>
      <h1>Welcome to Pet Heaven {!loggedInUser ? "" : name}</h1>
      <p>We help abandoned pets find a new home.</p>
    </div>
  )
}

export default Home