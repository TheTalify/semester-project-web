import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "../Login/index";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    window.location.reload(); // Navigate to the homepage after login
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload(); // Navigate to the login page after logout
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<>
            <Hero />
            <Popular />
            {/* <MainContent /> */}
        </>} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/:userID"
          element={isLoggedIn ? <MainContent /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default Main;
