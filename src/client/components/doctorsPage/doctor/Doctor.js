import React, { Component } from 'react';
import './doctor.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Doctor extends Component {
  render() {
    const routeDoctor = `/calender/${this.props.name}`;

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
          <Link to={routeDoctor}>
            <img src='/assets/calender.png' />
          </Link>
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
