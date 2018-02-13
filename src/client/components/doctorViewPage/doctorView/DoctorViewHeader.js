import React, { Component } from 'react';
import './doctorView.css';

class DoctorViewHeader extends Component {
  render() {
    return (
      <div>
        <div className='greenNavDocView'>
          <div>
            <h1>Have a Good Day Doctor!</h1>
          </div>
          <div className='left-sideDocView'>
            <a className='btnChangeDocView'>Change Password</a>
            <p className='waitingDocView'>Waiting</p>
            <i className='fa fa-bell-o bell'></i>
          </div>
        </div>
        <div className='headerDocView'>
          <div className='headDocView'>
            <img src='/assets/logo.png' className='logoDocView' alt='star' />
            <h1 className='titleDocView'>GENE MED LABS</h1>
          </div>
          <hr />
        </div>

      </div>
    );
  };
}

export default DoctorViewHeader;
