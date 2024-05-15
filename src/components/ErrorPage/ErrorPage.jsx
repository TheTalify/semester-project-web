import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Navbar from "../Mainpage/Navbar/Navbar";

const ErrorPage = () => {
  const { userID } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of a session token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Update the isLoggedIn state based on token presence
  }, []);

  const handleLogin = (token) => {
    // Handle login action
    localStorage.setItem("token", token);
    setIsLoggedIn(true); // Update the isLoggedIn state to true
  };

  const handleLogout = () => {
    // Handle logout action
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the isLoggedIn state to false
  };

  return (
    <>
      <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Make the container full height of the viewport
      textAlign: 'center' // Center the text horizontally
    }}>
      <h1><b>ERROR 404 NOT FOUND</b></h1>
    </div>
    </div>
      <Routes>
      </Routes>
    </>
  );
};

export default ErrorPage;