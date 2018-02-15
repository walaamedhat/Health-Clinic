import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { reserveTime } from '../../actions/reserve';
import PropTypes from 'prop-types';

class Basic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { events };
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(slotInfo) {
    this.props.reserve(slotInfo.start.toLocaleString());
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <BigCalendar
          selectable
          culture='en'
          events={this.state.events}
          views={['month', 'week', 'day']}
          step={10}
          timeslots={1}
          defaultView='day'
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
