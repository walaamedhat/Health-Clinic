import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { reserveTime } from '../../actions/reserve';
import PropTypes from 'prop-types';

BigCalendar.momentLocalizer(moment);

class Basic extends Component {
  constructor(props) {
    super(props);
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(slotInfo) {
    // console.log(slotInfo.start.toLocaleString());
    this.props.reserve(slotInfo.start.toLocaleString());
  }

  render() {
    console.log(this.props);

    return (
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
          onSelectSlot={this.handleTime}
        />
      </div>
    );
  }
}
Basic.propTypes = {
  reserve: PropTypes.func
};

const mapDispatchToProps = {
  reserve: reserveTime
};
export default connect(null, mapDispatchToProps)(Basic);
