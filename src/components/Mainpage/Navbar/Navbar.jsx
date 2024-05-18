import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import user from '../../Assets/user.png';
import logout from '../../Assets/logout.png'
import addProductIcon from '../../Assets/add.png'

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // User is logged in, perform logout
      navigate('/');
      onLogout();
      window.location.reload();
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={logo} alt="" style={{ width: '80px', height: 'auto', display: 'inline-block', marginRight: '5px' }} />
                    <p style={{ display: 'inline-block', verticalAlign: 'middle' }}>PakZone</p>
                </Link>
        </div>
        <ul className="nav-menu">
            <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link><hr /></li>
            <li><Link style={{ textDecoration: 'none' }} to='/Shop'>Shopping</Link><hr /></li>
            <li><Link style={{ textDecoration: 'none' }} to='/Artisans'>Artisans</Link><hr /></li>
            <li><Link style={{ textDecoration: 'none' }} to='/KuchOr'>KuchOr</Link><hr /></li>
            {isLoggedIn && (
                <li><Link style={{ textDecoration: 'none' }} to='/MyProducts'>My Products</Link><hr /></li>
            )}  
        </ul>

      <div className="nav-login-cart">
<<<<<<< HEAD
        {isLoggedIn ? (
          <img src={logout} alt="" style={{ width: '28px', height: 'auto', cursor: 'pointer'}} onClick={handleButtonClick} />
        ) : (
          <img src={user} alt="" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} onClick={handleButtonClick} />
        )}
        <Link to='/cart'><img src={cart_icon} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
        <div className="nav-cart-count">0</div>
      </div>
=======
  {isLoggedIn ? (
    <>
      <img src={logout} alt="" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} onClick={handleButtonClick} />
      <Link to='/cart'><img src={cart_icon} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
      <div className="nav-cart-count">0</div>
      <Link to='/addproduct'><img src={addProductIcon} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
    </>
  ) : (
    <>
      <img src={user} alt="" style={{ width: '28px', height: 'auto', cursor: 'pointer' }} onClick={handleButtonClick} />
      <Link to='/cart'><img src={cart_icon} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
      <div className="nav-cart-count">0</div>
    </>
  )}
</div>

>>>>>>> main
    </div>
  );
}

export default Navbar;