import React, { Component } from 'react';
import './doctorView.css';

import PropTypes from 'prop-types';
class DoctorViewPage extends Component {
  render() {
    if (!this.props.appointments) return <div />;
    const arr = this.props.appointments
      .filter(item => {
        return item.age >= 0;
      })
      .map((item, index) => {
        return (
          <div key={index}>
            <div>
              <h1 className='bookingCountDocView'>
                You have
                <span className='appointmentNum'>
                  {this.props.appointments[1].count}
                </span>
                bookings for the day
              </h1>
            </div>
            <div className='bigcontainer'>
              <div className='containerDocView'>
                <div className='currentPatientDocView'>
                  <p className='currentnowDocView'>Current Patient:</p>
                </div>
              </div>
              <div className='dataDocView'>
                <div className='first-elmDocView'>
                  <p>
                    Name: <item className='item'>{item.patient_name}</item>
                  </p>
                  <p>
                    Age: <item className='item'>{item.age}</item>
                  </p>
                  <p>
                    Visits: <item className='item'>{item.visit}</item>
                  </p>
                </div>
                <div className='second-elmDocView'>
                  <p>
                    Time Set Earlier: <item className='item'>{item.time}</item>
                  </p>
                  <p>
                    Notes:
                    <input
                      type='text'
                      placeholder='Write Notes'
                      name='note'
                      className='noteDocView'
                      value={item.note}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className='button2DocView'>
              <a className='btnDocView redDocView startDocView'>Start</a>
              <p className='button2DocView paddingDocView'>00:00:00</p>
            </div>
          </div>
        );
      });

    return <div>{arr}</div>;
  }
}

DoctorViewPage.propTypes = {
  appointments: PropTypes.array,
  filter: PropTypes.func,
  age: PropTypes.number
};

export default DoctorViewPage;
