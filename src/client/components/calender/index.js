import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
const myEventsList = { id: 0,
  title: 'test test',
  allDay: true,
  start: new Date(2015,3,0),
  end: new Date(2015,3,1)
};
const MyCalendar = () => (
  <div>
    <BigCalendar
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default MyCalendar;
