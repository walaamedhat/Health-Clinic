import React, { Component } from 'react';
import './doctor.css';
import PropTypes from 'prop-types';
import SkyLight from 'react-skylight';
import Basic from '../../calender/index.js';

class Doctor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      height: 'auto',
      textAlign: 'center'
    };
    const sytleCalender = {
      height: '320px'
    };

    return (
      <div className='doctor'>
        <div className='class-h2'>
          <h2 className='name'>Dr.{this.props.name}</h2>
        </div>
        <div className='inner-doctor'>
          <img src='/assets/Mahmoud.png' />
          <h5>{this.props.position}</h5>
          <p>{this.props.description}</p>
        </div>
        <div className='img'>
          <img
            src='/assets/calender.png'
            onClick={() => this.simpleDialog.show()}
          />
        </div>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title='Calender of the doctor'
        >
          <div className='www'>
            <div className='calender' style={sytleCalender}>
              <Basic />
            </div>
            <div className='input'>
              <input
                type='text'
                name='name'
                value=''
                id='name'
                className='patientname'
                placeholder='Name'
              />
              <input
                type='text'
                name='phone'
                value=''
                id='phone'
                className='phone'
                placeholder='Phone'
              />
              <button type='button' name='button'>
                Book
              </button>
            </div>
          </div>
        </SkyLight>
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
