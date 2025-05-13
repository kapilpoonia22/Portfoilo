import React from 'react';
import './Footer.css';
import footer_logo from '../../Assets/footer_logo.svg'
import user_icon from '../../Assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <h1>Portfolio</h1>
            <p>I Am A Full Stack Developer</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon}/>
            <input type="email" placeholder='enter your email' />
          </div>
          <div className="footer-subs">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Alex Bennett. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
