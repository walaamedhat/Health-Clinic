import React, { Component } from 'react';
import './doctorView.css';

import PropTypes from 'prop-types';
class DoctorViewPage extends Component {
  render() {
    if (!this.props.appointments)

      return <div />;
    const arr = this.props.appointments.filter(item => {
      return item.age >= 0;
    }).map((item, index) => {

      return (
        <div key={index}>
          <div>
            <h1 className='bookingCountDocView'>You have {this.props.appointments[1].count} bookings for the day</h1>
          </div>
          <div className='containerDocView'>
            <div className='currentPatientDocView'>
              <p className='currentnowDocView'>Current Patient:</p>
            </div>
          </div>
          <div className='dataDocView'>
            <div className='first-elmDocView'>
              <p>Name: {item.patient_name}</p>
              <p>Age: {item.age}</p>
              <p>Visits: {item.visit}</p>
            </div>
            <div className='second-elmDocView'>
              <p>Time Set Earlier: {item.time}</p>
              <p>Notes:
              <input type='text' placeholder='Patients notes' name='note' className='noteDocView' value={item.note}/>
              </p>
            </div>
          </div>
          <div className='button2DocView'>
            <a className='btnDocView redDocView startDocView'>Start</a>
            <p className='button2DocView paddingDocView'>00:00:00</p>
          </div>
          <div className='calendarDocView'>Calendar</div>
        </div>
      );
    });

    return (
      <div>
        {arr}
      </div>
    );
  }
}

DoctorViewPage.propTypes = {
  appointments: PropTypes.array,
  filter: PropTypes.func,
  age: PropTypes.number
};

export default DoctorViewPage;
