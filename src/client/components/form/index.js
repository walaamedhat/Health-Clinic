import { React, Component } from 'react';
import * as dataPatient from '../../../actions/reserveDataPatient';
import PropTypes from 'prop-types';

class Bookingform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      id: e.target.id
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.reserveData(this.state);
    this.props.reserveAppointment();
    event.preventDefault();
  }
  render() {
    return (
      <form className='input' onSubmit={this.handleSubmit}>
        <input
          id={this.props.id}
          type='text'
          name='name'
          value={this.state.value}
          onChange={this.handleInputChange}
          className='patientname'
          placeholder='Name'
          required
        />
        <input
          id={this.props.id}
          type='text'
          name='phone'
          value={this.state.value}
          onChange={this.handleInputChange}
          className='phone'
          placeholder='Phone'
          required
        />
        <input type='submit' value='Book' />
      </form>
    );
  }
}
Bookingform.propTypes = {
  id: PropTypes.number,
  reserveData: PropTypes.func,
  reserveAppointment: PropTypes.func
};
export default Bookingform;
