import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './greenNav.css';

class GreenNav extends Component {
  render() {
    return (
      <div className='greenNav'>
        <Link to='/'>
          <i className='fas fa-home' style={{ color: 'white',
            fontSize: '35px',marginLeft: '20px' }}></i>
        </Link>

      </div>
    );
  }
}

export default GreenNav;
