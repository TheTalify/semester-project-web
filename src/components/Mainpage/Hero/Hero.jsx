import React from 'react'
import './Hero.css'
import arrow_icon from '../../Assets/arrow_icon.png'
import hero_img from '../../Assets/hero1.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className='shopLocal'><p>Shop local, feel global</p></div>
        {/* <h2>Shop local, feel global</h2> */}
        <div className='explore'>
          <p>Explore our collection<br/>and embrace the power<br/> of authenticity.</p>
        </div>
        <div className="hero-latest-btn">
          <div>Become Partner</div>
          <img src={arrow_icon} alt=""style={{ width: '28px', height: 'auto' }} />
        </div>
      </div>


      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}
export default Hero