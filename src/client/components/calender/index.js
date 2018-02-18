import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { reserveTime } from '../../actions/reserve';
import PropTypes from 'prop-types';

class Basic extends Component {
  constructor(props, context) {
    super(props, context);
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(slotInfo) {
    this.props.reserve(slotInfo.start.toLocaleString());
    this.onSlotChange(slotInfo);
  }
  render() {
    const appointments = this.props.event.map((event, j) => {
      const y = this.props.event[j].start.y;
      const m = this.props.event[j].start.m;
      const d = this.props.event[j].start.d;
      const h = this.props.event[j].start.h;
      const i = this.props.event[j].start.i;
      const s = this.props.event[j].start.s;
      const st = new Date(Date.UTC(y, m, d, h, i, s));
      const en = new Date(Date.UTC(y, m, d, h, i + 10, s));

      return { title: 'Booked', start: st, end: en };
    });

    return (
      <div style={{ width: '100%' }}>
        <BigCalendar
          selectable
          culture='en'
          events={appointments}
          step={10}
          timeslots={1}
          defaultView='day'
          defaultDate={new Date()}
          min={new Date(0, 0, 0, 8, 0, 0, 0)}
          max={new Date(0, 0, 0, 16, 0, 0, 0)}
          onSelectEvent={event => alert('Choose another appointment')}
          onSelectSlot={this.handleTime}
        />
      </div>
    );
  }
}
Basic.propTypes = {
  reserve: PropTypes.func,
  event: PropTypes.array
};
const mapStateToProps = state => {
  return { event: state.events.events };
};

const mapDispatchToProps = {
  reserve: reserveTime
};
export default connect(mapStateToProps, mapDispatchToProps)(Basic);
