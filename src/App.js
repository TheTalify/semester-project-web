import logo from './logo.svg';
import './App.css';
import Navbar from './components/Mainpage/Navbar/navbar';
import Main from './components/Mainpage'
import {Route, Routes, Navigate} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
function App() {
  const user = localStorage.getItem('token')
  return (
    <Routes>
			{user && <Route path="/" exact element={<Navbar />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
  );
}

export default App;
