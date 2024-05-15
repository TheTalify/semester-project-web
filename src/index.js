import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './components/Mainpage';
import ProductCatalogue from './components/productpage/productcatalog'
import AddProduct from './components/AddProductpage/AddProduct'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AddProduct />
    </BrowserRouter>
  </React.StrictMode>
);