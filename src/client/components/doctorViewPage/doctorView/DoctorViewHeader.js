import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './doctorView.css';

class DoctorViewHeader extends Component {
  render() {
    if (!this.props.appointments) return <div />;
    const arr = this.props.appointments
      .filter(item => {
        return item.age >= 0;
      })
      .map((item, index) => {
        return (
          <div key={index}>
            <div className='greenNavDocView'>
              <div>
                <a className='btnChangeDocView'>Change Password</a>
              </div>
              <div className='left-sideDocView'>
                <p className='waitingDocView'>
                  Waiting<i className='fa fa-bell-o bell' />
                </p>
                <div className='circle'>{this.props.appointments[2].count}</div>
              </div>
            </div>

            <div className='headerDocView'>
              <div className='headDocView'>
                <img
                  src='/assets/logo.png'
                  className='logoDocView'
                  alt='star'
                />
                <h1 className='titleDocView'>GENE MED LABS</h1>
              </div>
              <hr />
            </div>
          </div>
        );
      });

    return <div>{arr}</div>;
  }
}

DoctorViewHeader.propTypes = {
  appointments: PropTypes.array
};
export default DoctorViewHeader;
