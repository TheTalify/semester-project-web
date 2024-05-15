import './App.css';
import Artisan from './Pages/Artisan';
import Cart from './Pages/Cart';
import Home from './components/Mainpage/Home';
import KuchOr from './Pages/KuchOr';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Navbar from './components/Mainpage/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/kuchOr' element={<KuchOr/>}/>
        <Route path='/artisans' element={<Artisan/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginSignup' element={<LoginSignup/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
