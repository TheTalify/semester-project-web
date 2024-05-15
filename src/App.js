import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Mainpage';
import Signup from './components/Signup';
import Login from './components/Login';
import AddProduct from './components/AddProductpage/AddProduct';
import ProductCatalogue from './components/productpage/productcatalog';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
	  <Route path="/*" element={<ErrorPage />} />
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={user ? <Navigate replace to="/" /> : <Signup />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
	  <Route path="/shop" element={<ProductCatalogue />} />
    </Routes>
  );
}

export default App;
