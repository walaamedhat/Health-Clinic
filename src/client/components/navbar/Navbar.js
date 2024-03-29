import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src='/assets/logo.png' className='logo' alt='star' />
          <div className='h1'>Gene Med Labs</div>
        </div>
        <ul className='firstUl'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#doctors'>Doctors</a>
          </li>
          <li>
            <a href='#aboutUs'>About Us</a>
          </li>
          <li>
            <a href='#contactUs'>Contact</a>
          </li>
        </ul>
        <ul className='secondUl'>
          <li>
            <a href='https://www.facebook.com/GENE.MEDICAL.LABS'>
              <i className='fab fa-facebook-f' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com/GENE.MEDICAL.LABS'>
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a href='https://www.google.com/GENE.MEDICAL.LABS'>
              <i className='fab fa-google-plus-g' />
            </a>
          </li>
        </ul>
        <div className='login'>
          <a href='#'>Login with Facebook</a>
        </div>
      </div>
    );
  }
}
export default Navbar;
