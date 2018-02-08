import React, { Component } from 'react';
import './doctor.css';
import PropTypes from 'prop-types';

class Doctor extends Component {
  render() {
    return (
      <div className = 'doctor'>
        <div className='class-h2'>
          <h2 className='name'>Dr.{this.props.name}</h2>
        </div>
        <div className='inner-doctor'>
          <img src = '/assets/Mahmoud.png' />
          <h5>{this.props.position}</h5>
          <p>{this.props.description}</p>
        </div>
        <div className='img'>
          <img src='/assets/calender.png' />
        </div>
      </div>
    );
  }
}

Doctor.propTypes = {

  name: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string

};

export default Doctor;
