import React, { Component } from 'react';
import { connect } from 'react-redux';
import './doctor.css';
import * as dataPatient from '../../../actions/reserveDataPatient';
import * as calenderDoctor from '../../../actions/doctorsCalender';
import PropTypes from 'prop-types';
import SkyLight from 'react-skylight';
import Basic from '../../calender';
import validate from './validate';
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCalender = this.handleCalender.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      id: e.target.id,
      nameError: '',
      phoneError: '',
      booking: false
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleCalender() {
    this.props.event(this.props.location,this.props.id);
    this.simpleDialog.show();
  }
  handleSubmit(event) {
    event.preventDefault();
    const validateDate = validate(this.state.name, this.state.phone);
    const err = validateDate.isError;
    if (!err) {
      this.setState({ booking: true });
      this.simpleDialog2.show();
      this.props.reserveData(this.state);
      this.props.reserveAppointment();
    } else {
      this.setState({
        ...this.state,
        ...validateDate.errors
      });
    }
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
    const mySmallDialog = {
      height: '104px',
      marginTop: '-42px'
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
            name={this.props.name}
            id={this.props.id}
            src='/assets/calender.png'
            onClick={this.handleCalender}
          />
        </div>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title='Calender of the doctor'
        >
          <div className='popup'>
            <div className='calender' style={sytleCalender}>
              <Basic />
            </div>
            <div>
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
              <div className='errorMassage'>{this.state.nameError}</div>
              <div className='errorMassage'>{this.state.phoneError}</div>
            </div>
          </div>
        </SkyLight>
        <SkyLight
          dialogStyles={mySmallDialog}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog2 = ref)}
        >
          <h2>{this.props.message}</h2>
        </SkyLight>
      </div>
    );
  }
}

Doctor.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  reserveData: PropTypes.func,
  reserveAppointment: PropTypes.func,
  onChange: PropTypes.func,
  time: PropTypes.string,
  message: PropTypes.string,
  event: PropTypes.func
};

const mapStateToProps = state => {
  return { message: state.reserve.message };
};

const mapDispatchToProps = {
  reserveData: dataPatient.reserveData,
  reserveAppointment: dataPatient.reserveAppointment,

  event: calenderDoctor.fetchDoctorsCalender
};
export default connect(mapStateToProps, mapDispatchToProps)(
  Doctor
);
