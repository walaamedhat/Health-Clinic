import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class Doctors extends Component {
  render() {
    return (
      <div id='doctors' className='doctors'>
        <div className='container'>
          <div className='base'>
            <i className='fa fa-user-md' />
          </div>
        </div>
        <div className='text'>
          <h3> Doctors Location </h3> <p> WE ARE RELIABLE & TRUSTED </p>
        </div>
        <div className='imgs'>
          <Link to='/doctors/hebron'>
            <img src='./assets/hebron.png' className='dr_location' />
            <span className='hebron'> Hebron </span>
          </Link>
          <a href='/doctors/gaza'>
            <img src='./assets/gaza.png' className='dr_location' />
            <span className='gaza'> Gaza </span>
          </a>
          <a href='/doctors/jerusalem'>
            <img src='./assets/jerusalem.png' className='dr_location' />
            <span className='jerusalem'> Jerusalem </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Doctors;
