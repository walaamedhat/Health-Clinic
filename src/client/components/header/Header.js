import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'><div className='logo'>
          <img src='/assets/logo.png' className='logo' alt='star' />
          <h1>Gene Med Labs</h1>
        </div></Link>
        <div className='secondPart'>
          <ul className='secondUl'>
            <li>
              <a href='#'>
                <i className='fab fa-facebook-f' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-twitter' />
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-google-plus-g' />
              </a>
            </li>
          </ul>
          <div className='login'>
            <a href='#'>Login with Facebook</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
