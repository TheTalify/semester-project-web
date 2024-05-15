import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../Login/index";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";
import Hero from './Hero/Hero'
import Popular from './Popular/Popular'

const Main = () => {
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
      <Hero/>
      <Popular/>
    </div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/:userID"
          element={
            isLoggedIn ? (
              <MainContent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default Main;