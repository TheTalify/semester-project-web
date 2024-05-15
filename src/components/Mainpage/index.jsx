import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../Login/index";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';
import './Main.css'; 

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Check if the logout flag is present in localStorage
    const logoutFlag = localStorage.getItem("logoutFlag");
    if (logoutFlag === "true") {
      setShowLogoutMessage(true);
      // Clear the logout flag after displaying the message
      localStorage.removeItem("logoutFlag");
      // Hide the message after some time (e.g., 3 seconds)
      setTimeout(() => {
        setShowLogoutMessage(false);
      }, 3000);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setShowLogoutMessage(false); // Reset the logout message
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    localStorage.setItem("logoutFlag", "true"); // Set logout flag in localStorage
    window.location.reload(); // Reload the page after logout
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {showLogoutMessage && (
        <div className="logout-message">
        You have successfully logged out
      </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<>
            <Hero />
            <Popular />
          </>}
        />
        {!isLoggedIn && (
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
        )}
        <Route
          path="/:userID"
          element={isLoggedIn ? <MainContent /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default Main;