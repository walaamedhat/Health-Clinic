import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

console.log('moment is here ', BigCalendar.momentLocalizer(moment));
const Basic = () => (
  <div style={{ width: '100%' }}>
    <BigCalendar
      selectable
      events={events}
      step={10}
      views={['day', 'week']}
      timeslots={1}
      defaultView='day'
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date()}
      min={new Date(0, 0, 0, 8, 0, 0, 0)}
      max={new Date(0, 0, 0, 16, 0, 0, 0)}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo =>
        alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
      }
    />
  </div>
);

export default Basic;
