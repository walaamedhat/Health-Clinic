import React, { Component } from 'react';
import './secretaryView.css';

class SecretaryViewHeader extends Component {
  render() {
    return (
      <div>
        <div className='headSecView'>
          <div className='firstPartSecView'>
            <img src='/assets/logo.png' className='logoSecView' alt='star' />
            <h1 className='titleSecView'>GENE MED LABS</h1>
          </div>
          <div className='secondPartSecView'>
            <a className='btnChangeSecView'>Change Password</a>
            <div className='containerSec'>
              <label htmlFor='sSec' className='labelSec'>
                <input
                  type='text'
                  value=''
                  placeholder='search'
                  className='sSec'
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecretaryViewHeader;
