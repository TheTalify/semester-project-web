import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import user from '../../Assets/user.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" style={{ width: '80px', height: 'auto' }} />
            <p>PakZone</p>
        </div>
        <ul className="nav-menu">
        {/* <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/shop'>Shop All</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("artisans")}}><Link style={{textDecoration: 'none'}} to='artisans'>Artisans</Link>{menu==="artisans"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kuchOr")}}><Link style={{textDecoration: 'none'}} to='kuchOr'>KuchOr</Link>{menu==="kuchOr"?<hr/>:<></>}</li> */}
        <li><Link style={{ textDecoration: 'none' }} to='/shop'>Shop All</Link><hr /></li>
        <li><Link style={{ textDecoration: 'none' }} to='/artisans'>Artisans</Link><hr /></li>
        <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link><hr /></li>
        <li><Link style={{ textDecoration: 'none' }} to='/kuchOr'>KuchOr</Link><hr /></li>
        </ul>
        <div className="nav-login-cart">
            {/* <button>Login</button> */}
            <Link to='loginSignup'><img src={user} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
            <Link to='/cart'><img src={cart_icon} alt="" style={{ width: '28px', height: 'auto' }} /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
export default Navbar