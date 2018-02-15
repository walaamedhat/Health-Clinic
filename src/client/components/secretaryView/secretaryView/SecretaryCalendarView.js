import React, { Component } from 'react';
import './secretaryView.css';

class SecretaryCalendarView extends Component {
  render() {
    return (
      <div className='flexSecView'>
        <div className='calendarSecretaryView'>
          <div className='firstPartSecView'>
            <img src='/assets/calendar.jpg' alt='star' />
          </div>
        </div>
      </div>
    );
  };
}

export default SecretaryCalendarView;
