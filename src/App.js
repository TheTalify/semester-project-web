import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Mainpage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
		<Route path="/*" element={<Main />} />
      {/* <Route path="/*" element={user ? <Main /> : <Navigate replace to="/login" />} /> */}
      <Route path="/signup" element={user ? <Navigate replace to="/" /> : <Signup />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
    </Routes>
  );
}

export default App;
